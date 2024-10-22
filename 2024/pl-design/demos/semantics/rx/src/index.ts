import * as rx from "rxjs"; 

// ------------------------------------------------------------------
// RANDOM WALK
// ------------------------------------------------------------------

function random(delay:number) {
  const evt = new rx.Subject<number>();
  evt.subscribe((v) => 
    window.setTimeout(() => evt.next(Math.random()), delay));
  evt.next(Math.random());
  return evt;
}

let randomWalk = () => 
  random(100)
    .pipe(rx.map(v => v * 50 - 25))
    .pipe(rx.scan((state, v) => state + v))
    .pipe(rx.map(v => 500+v))

// TODO: Subscribe to 'random(1000)'
// TODO: Define random walk (using let) and subscribe to it 
// TODO: combineLatest array of two, subscribe and lineTo


const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
ctx.strokeStyle="rgb(0,0,0)"

ctx.beginPath()
ctx.moveTo(500, 500)

rx.combineLatest( [randomWalk(), randomWalk()] )
  .subscribe(([x, y]) => {
  ctx.lineTo(x, y)
  ctx.stroke() 
});



// ------------------------------------------------------------------
// SUBJECT
// ------------------------------------------------------------------

// TODO: What does the following do?
// TODO: And what if we call evt.next directly (no timer)?
// TODO: Two implementations of MySubject

class MySubjectImmediate {
  listeners:((v:string) => void)[] = []

  subscribe(f:(v:string) => void)  {
    this.listeners.push(f)
  }

  next(v:string) {
    for(const l of this.listeners) l(v)
  }
}

class MySubjectQueue {
  listeners:((v:string) => void)[] = []
  values:string[] = []
  running:boolean = false

  subscribe(f:(v:string) => void)  {
    this.listeners.push(f)
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

const evt = new MySubjectQueue();
evt.subscribe(s => {
  if (s.length < 3) {
    for(const c of ["A","B"]) {
      evt.next(s+c);
    }
  }
  console.log(s)
})
evt.next("")
