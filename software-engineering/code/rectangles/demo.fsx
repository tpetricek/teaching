open System.Drawing
open System.Windows.Forms

// Create user interface & list of rectangles & setup drawing
let form = new Form(Visible=true)
let rects = ResizeArray<(int * int) * (int * int)>()
let current : ref<option<(int * int) * (int * int)>>= ref None

form.Paint.Add(fun e ->
  let drawRectangle ((x1:int, y1), (x2, y2)) brush =
    let x, y = min x1 x2, min y1 y2
    let width, height = abs (x1 - x2), abs (y1 - y2)
    e.Graphics.FillRectangle(brush, x, y, width, height)
  for rect in rects do drawRectangle rect Brushes.Green
  !current |> Option.iter (fun rect -> drawRectangle rect Brushes.Gray) )

// Use event combinators to create an event that is triggered
// when the user releases mouse button or moves the pointer
let upOrMove =
  Event.merge 
    (Event.map Choice1Of2 form.MouseUp)
    (Event.map Choice2Of2 form.MouseMove)

// Implement the drawing loop
let rec drawing start = async {
  let! info = Async.AwaitEvent upOrMove
  match info with 
  | Choice1Of2 up ->
      let finish = up.X, up.Y
      rects.Add(start, finish)
      current := None
      form.Refresh()
      return! waiting() 
  | Choice2Of2 move ->
      let finish = move.X, move.Y
      current := Some(start, finish)
      form.Refresh() 
      return! drawing start }

and waiting () = async {
  let! down = Async.AwaitEvent form.MouseDown
  return! drawing (down.X, down.Y) }

// Start ini the waiting state
waiting () |> Async.StartImmediate