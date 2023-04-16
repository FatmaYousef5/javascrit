const video = document.getElementsByTagName('video')[0];
const progress = document.getElementById('p2');
const volumeSlider = document.getElementById('v1');
const current = document.getElementById('current');
const total = document.getElementById('total');
const fullscr = document.getElementById('btnf');
function playVideo() {
    document.getElementsByTagName('video')[0].play();
}
function pauseVideo() {
    document.getElementsByTagName('video')[0].pause();
}
function volumeRange(e) {
    video.volume = volumeSlider.value;
}
function muteVideo() {
    if (video.muted == true) {
        video.muted = false;
    }
    else {
        video.muted = true;
    }
}
progress.oninput = function () {
    video.currentTime = progress.value;
}
video.ontimeupdate = function () {
    if ((current.innerHTML = `${Math.floor(video.currentTime)}`) <= 9) {
        current.innerHTML = `${"0:" + "0" + Math.floor(video.currentTime)}`;
    }
    else if ((current.innerHTML = `${Math.floor(video.currentTime)}`) > 9 && (current.innerHTML = `${Math.floor(video.currentTime)}`) <= 59) {
        current.innerHTML = `${"0:" + Math.floor(video.currentTime)}`;
    }
    else if ((current.innerHTML = `${Math.floor(video.currentTime)}`) > 59) {
        current.innerHTML = `${"0" + Math.floor(video.duration) / 60 + ":00"}`;
    }
    total.innerHTML = `${"0" + Math.floor(video.duration) / 60 + ":00"}`;
    progress.value = video.currentTime;
}
video.onloadeddata = function () {
    progress.max = video.duration;
    video.currentTime = progress.value;
}
function videoSpeed1() {
    document.getElementsByTagName('video')[0].playbackRate = 0.5;
}
function videoSpeed2() {
    document.getElementsByTagName('video')[0].playbackRate = 1;
}
function videoSpeed3() {
    document.getElementsByTagName('video')[0].playbackRate = 2;
}
fullscr.addEventListener("click", function () {
    video.requestFullscreen(video);
});

document.getElementById('btn1').onclick = playVideo;
document.getElementById('btn2').onclick = pauseVideo;
document.getElementById('btn3').onclick = muteVideo;
document.getElementById('btn4').onclick = videoSpeed1;
document.getElementById('btn5').onclick = videoSpeed2;
document.getElementById('btn6').onclick = videoSpeed3;


/*video.addEventListener('timeupdate',function(){
    progress.value = video.currentTime / video.duration;
});*/