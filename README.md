# BestMatch

> Wildcards, but reverse.

Most of libs like [wildcard](https://www.npmjs.com/package/wildcard) are meant to find elements that match specific pattern. I had use case when I had to find pattern that most accuratelly match given string.

## Install

```
npm i --save bestmatch
```

## Usage

```javascript
var bestmatch = require('bestmatch'),
    patterns = [
            'a.b.c',
            '*.b.c',
            'a.*.c',
            'a.b.*',
            'a.*.*'
    ];

bestmatch(patterns 'a.b.c'); // a.b.c
bestmatch(patterns 'b.b.c'); // *.b.c
bestmatch(patterns 'a.a.c'); // a.*.c
bestmatch(patterns 'a.b.d'); // a.b.*
bestmatch(patterns 'a.z.c'); // a.*.c
bestmatch(patterns 'a.c.d'); // a.*.*
```

## License

The MIT License (MIT)

Copyright (c) 2016 Łukasz Marek Sielski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
