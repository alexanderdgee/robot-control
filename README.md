# robot-control

To compile and run:

```
npm run-script execute
```

## Assumptions

- Mk1 and Mk2 cannot go out-of-bounds; on receiving an instruction to go left/west while already at x=0, will stay where it is, and similarly for instructions to go backwards/south.
- Mark 2 always starts facing (x=0,y=1).
- Mark 2 does not treat a "backwards" command as a command to permanently orient in a new direction: it rotates, moves, then rotates back.
- Since Mk1 and Mk2 were produced before multiple forward instructions were permitted, in the interest of time, these devices have not been supplied with firmware updates; they will ignore multiples applied to forward commands; firmware updates can be implemented after the launch of the first Mk3s.
- Once the Mk3 runs out of fuel, it will be unable to move further, however it will not error or otherwise alert that it has run out of fuel.

TODOs:

- The array of constructors in `index.js` needs a proper type...
- Multiples before non-forward commands are not handled well - see `mk3.ts`. This code currently expects _any_ multiples to apply to the _next forward command_. Well-formed command sequences should behave as expected until this is addressed.
