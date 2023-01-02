import * as rx from "rxjs"; 

function random(delay:number) {
  const evt = new rx.Subject<number>();
  evt.subscribe((v) => window.setTimeout(() => evt.next(Math.random()), delay));
  evt.next(Math.random());
  return evt;
}

function randomWalk() {
  return random(100)
    .pipe(rx.map(v => v*50-25))
    .pipe(rx.scan((acc, v) => Math.max(Math.min(acc+v, 500), -500)))
    .pipe(rx.map(v => v+500))
}

const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
ctx.strokeStyle="rgb(0,0,0)"

ctx.beginPath()
ctx.moveTo(500, 500)

rx.combineLatest([ randomWalk(), randomWalk() ])
.subscribe(([x, y]) => {
  ctx.lineTo(x, y)
  ctx.stroke()
})

class MySubject {
  listeners:((v:string) => void)[] = []
  values:string[] = []
  running:boolean = false

  subscribe(f:(v:string) => void)  {
    this.listeners.push(f)
  }

  nextX(v:string) {
    for(const l of this.listeners) l(v)
  }
  next(v:string) {
    this.values.push(v)
    if (!this.running) {
      this.running = true;
      while((v=this.values.shift())!=null)
        for(const l of this.listeners) l(v)
        this.running = false;
    }
  }
}

//const evt = new rx.Subject<string>();
const evt = new MySubject();
evt.subscribe(s => {
  if (s.length < 3) {
    for(const c of ["A","B"]) {
      //window.setTimeout(() => evt.next(s+c), 100)
      evt.next(s+c)
    }
  }
  console.log(s)
})
evt.next("")
