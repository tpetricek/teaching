open Browser
open Demo.Html

type Item = 
  { Text : string 
    Completed : bool }

type State = 
  { Work : Item list 
    Input : string }

type Event = 
  | Add
  | Done of int
  | UpdateInput of string

let initial =
  { Work = [ 
      { Text = "Teach course on tiny systems"; Completed = false }
      { Text = "Go for lunch"; Completed = true } 
      { Text = "Collect kids from school"; Completed = false } 
    ]
    Input = "" }

let update state event = 
  match event with 
  | Done i ->
      let nwork = state.Work |> List.mapi (fun j el -> 
        if i = j then { el with Completed = true }
        else el )
      { state with Work = nwork }
  | UpdateInput s -> 
      { state with Input = s }
  | Add -> 
      let ni = { Text = state.Input; Completed = false }
      { Work = state.Work @ [ni]; Input = "" }

let render trigger state =
  h?div [] [ 
    h?h1 [] [ text "Awesome TODO list" ]
    h?ul [] [ 
      for i, it in Seq.indexed state.Work ->
        h?li [ "class" => if it.Completed then "completed" else "" ] [ 
          text it.Text
          h?a ["click" =!> fun _ _ -> trigger(Done i) ] [ text "X" ] 
        ]
    ]
    h?input ["type" => "text"; "change" =!> fun el _ -> 
      trigger(UpdateInput((el :?> Types.HTMLInputElement).value)) ] []
    h?button ["click" =!> fun _ _ -> trigger Add ] [ text "Add" ]
  ]

createVirtualDomApp "root" initial render update