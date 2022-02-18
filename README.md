# Jest Outputfile Bug Repro

Simple reproduction to show that the use of --outputfile --json affects coverage output on the command line.

## Setup

`npm install`

## Test with outputfile

`npm run test-outputfile`

Returns output:

```
❯ npm run test-outputfile

> jest-outputfile-bug-repro@1.0.0 test-outputfile
> jest --outputFile test-results.json --json

 PASS  test/hello.test.ts
  hello world function
    ✓ returns the correct string (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.935 s, estimated 3 s
Ran all test suites.
Test results written to: test-results.json
```

## Test without outputfile

`npm run test-no-outputfile`

Returns output:

```
❯ npm run test-no-outputfile

> jest-outputfile-bug-repro@1.0.0 test-no-outputfile
> jest

 PASS  test/hello.test.ts
  hello world function
    ✓ returns the correct string (1 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.ts |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.83 s, estimated 2 s
Ran all test suites.
```
