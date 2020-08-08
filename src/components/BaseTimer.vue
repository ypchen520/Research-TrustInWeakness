<template>
<!-- Source coppied from MateuszRybczonek on 
https://medium.com/js-dojo/how-to-create-an-animated-countdown-timer-with-vue-89738903823f -->
  <div class="base-timer">
    <svg v-if="!this.isMini" class="base-timer__svg" viewBox="0 0 100 100" width = "70%" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <text :x="formattedTimeLeft.width" y="55" style="fill:grey">{{ formattedTimeLeft.text }} </text>
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          :stroke-dasharray="circleDasharray"
          class="base-timer__path-remaining"
          :class="remainingPathColor"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <svg v-if="this.isMini" class="base-timer__svg mini" viewBox="0 0 100 100" width = "25%" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed mini" cx="50" cy="50" r="35"></circle>
        <path
          :stroke-dasharray="circleDasharray"
          class="base-timer__path-remaining mini"
          :class="remainingPathColor"
          d="
            M 50, 50
            m -35, 0
            a 35,35 0 1,0 70,0
            a 35,35 0 1,0 -70,0
          "
        ></path>
      </g>
    </svg>
  </div>
</template>

<script>
//circumfrence of a 45px circle
const FULL_DASH_ARRAY = 283;
//circumfrence of a 35px circle
const MINI_DASH_ARRAY = 220;

const WARNING_THRESHOLD = 30;
const ALERT_THRESHOLD = 10;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

// var TIME_LIMIT = 60;
var id = 123;
export default {
    name: 'BaseTimer',
  data() {
    return {
      timePassed: 0,
      timerInterval: null
    };
  },
    props: {
        TIME_LIMIT:{
            type: Number,
            default: 60
        },
        isRepeatable:{
            type: Boolean,
            default: false
        },
        isMini:{
          type: Boolean,
          default: false
        }
  },
  computed: {
    circleDasharray() {
      let filledLength = (this.isMini)? MINI_DASH_ARRAY : FULL_DASH_ARRAY
      return `${(this.timeFraction * filledLength).toFixed(0)} 283`;
    },

    formattedTimeLeft() {
      if (this.timePassed == 0) {
        return {text: `Paused`, width: 26.5};
      } else {
        const timeLeft = this.timeLeft;
        let sendWidth = 0;
        if(timeLeft > 599){
          sendWidth = 31.5;
        }else{ 
          sendWidth = 37
        }
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
        return {text: `${minutes}:${seconds}`, width:sendWidth};
      }
    },

    timeLeft() {
      return this.TIME_LIMIT - this.timePassed;
    },

    timeFraction() {
      const rawTimeFraction = this.timeLeft / this.TIME_LIMIT;
      return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction);
    },

    remainingPathColor() {
      const { alert, warning, info } = COLOR_CODES;

      if (this.timeLeft <= alert.threshold) {
        return alert.color;
      } else if (this.timeLeft <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
    }
  },

  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
      }
    }
  },

  methods: {
    onTimesUp() {
        this.$emit('finished',id);
      clearInterval(this.timerInterval);
      if(this.isRepeatable){
          this.timePassed = 0;
          this.startTimer()
      }
    },

    //todo stop timer so we can clear any left over loopers

    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    }
  }
};
</script>

<style scoped lang="scss">
.base-timer {
  position: relative;

  &__svg {
    margin-left: 15%;

    &.mini{
      margin-left: 37.5%;
    }
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 5px;
    stroke: grey;

    &.mini {
      stroke-width: 22px;
    }
  }

  &__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: #4CAF50;
    }

    &.orange {
      color: #FFC107;
    }

    &.red {
      color: #FF5722;
    }

    &.mini {
      stroke-width: 25px;
    }    
  }



}
</style>
