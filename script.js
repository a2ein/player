/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'FIRE SAFETY-1',
        'name': 'f1.mp4',
        'duration': '',
    },
    {
        'id': 'a2',
        'title': 'FIRE SAFETY-2',
        'name': 'f2.mp4',
        'duration': '',
    },
    {
        'id': 'a3',
        'title': 'FIRE SAFETY-3',
        'name': 'f3.mp4',
        'duration': '',
    },


];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.png" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.png';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.png';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.png';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
