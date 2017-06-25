<template>
    <div class="loading">
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
    </div>
</template>
<style>
    .loading{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index:100;
        background:rgba(0, 0, 0, 0.6);
    }
    .spinner {
        position: absolute;
        top:100px;
        left: 50%;
        -webkit-transform:translateX(-50%);
        transform:translateX(-50%);
      height: 100px;
      width: 150px;
      text-align: center;
    }

.spinner > div {
  width: 30px;
  height: 30px;
  background-color: #67CF22;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>