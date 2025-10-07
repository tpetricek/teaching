// Evaluate a computation
1 + 2

// Print hello world
printfn "Hello world!"

// Define an algebraic data type
type Result = 
  | Failed
  | Success of int

// Division by zero returns a failure
let divide a b = 
  if b = 0 then Failed
  else Success(a / b)

// Pattern matching to analyse a value
let printResult r = 
  match r with 
  | Failed -> printfn "failed :-("
  | Success r -> printfn "success! result is: %d" r

// Pass the result of a function to 
// printResult using an F# pipeline
divide 10 2 |> printResult
divide 10 0 |> printResult





