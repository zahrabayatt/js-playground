// putting all method in prototype is not good and it runs sorts of issue

// Premature optimization is the root of all evils

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
  });

  object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
  });

  object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
  });
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
Stopwatch.prototype.start = function () {
  if (this.running) {
    throw new Error("Stopwatch is not started.");
  }

  this.running = true;

  this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
  if (!this.running) {
    throw new Error("Stopwatch has already started.");
  }

  this.running = false;

  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};
