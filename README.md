# robot-control

To compile and run:

```
npm run-script execute
```

## Assumptions

- Robot cannot go out-of-bounds; on receiving an instruction to go left while already at 0, will stay where it is, and similarly for instructions to go backwards.
- Mark 2 always starts facing (x=0,y=1).
- Mark 2 does not treat a "backwards" command as a command to permanently orient in a new direction: it rotates, moves, then rotates back.
