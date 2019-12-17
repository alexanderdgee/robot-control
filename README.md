# robot-control

To compile and run:

```
npm run-script execute
```

## Assumptions

- Robot cannot go out-of-bounds; on receiving an instruction to go left while already at 0, will stay where it is, and similarly for instructions to go backwards.
