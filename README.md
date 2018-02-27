![Image of Yaktocat](https://raw.githubusercontent.com/sorenhoyer/mobx-state-tree-live-data-performance-test/master/mobx-state-tree-live-data-performance-test.PNG)

# mobx-state-tree-live-data-performance-test
So, I've set the maxCount to 10, which means that once 10 points have been added, it starts shifting the first item out of the array, while at the same time pushing a new point into the array.

I thought for a long time that it was caused by some kind of race condition, but I can verify this also happens when using promises.

The weird part is that if using MobX and not "bundling" the shift/push mutations inside actions, this doesn't happen. In MST however you have to use an action for the addMeasurements, so we need to figure out what going on here.

In the console you can inspect the output of console.log(store.sensors.get('sensor1').queue.data.slice()) for each rerender. Sometimes (the first 10-12 iterations) the same timestamp will appear twice in a row, and sometimes the first 2 items will be removed. It seems to all normalize when the maxCount havebeen reached and all the erroneous items have been shifted out of the array. Weird, or what am I missing? :)

[![Youtube video link](https://img.youtube.com/vi/6TMjDH6VJ-o/0.jpg)](https://www.youtube.com/watch?v=6TMjDH6VJ-o)

**Development** mode:
- clone
- npm install
- npm start to run the app

**Production** mode:

- clone
- npm install
- npm run build
- npm install -g serve
- serve -s build

