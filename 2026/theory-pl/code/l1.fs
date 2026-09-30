// The ! and := operators come from ML and are
// deprecated in F#, but we can ignore the warning!
#nowarn "3370"

// Allocate two reference cells on the heap
// (L1 does not allow allocation, we will assume
// that all locations are already defined)
let l1 = ref 5
let l2 = ref 1

while !l1 >= 1 do
  l2 := !l2 * !l1
  l1 := !l1 + -1
done
!l1 
!l2
