open Browser
open Demo.Html

type State = 
  { Count : int }

type Event = 
  | Increment of int
  | Reset 

let initial = 
  { Count = 0 }

let update state evt = 
  match evt with 
  | Increment(n) -> { Count = state.Count + n }
  | Reset -> { Count = 0 }

let render trigger state =
  h?div [] [ 
    h?h1 [] [ text ("Count: " + string state.Count) ]
    h?button [ "click" =!> fun _ _ -> trigger(Increment(1)) ] [ text "Increment" ]
    h?button [ "click" =!> fun _ _ -> trigger(Increment(-1)) ] [ text "Decrement" ]
    h?button [ "click" =!> fun _ _ -> trigger(Reset) ] [ text "Reset" ]
  ]

createVirtualDomApp "root" initial render update