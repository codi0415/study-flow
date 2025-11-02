//요소 변수 지정
const timestartbutton = document.getElementById('time_start');
const timeendbutton = document.getElementById('time_end');
const resetbutton = document.getElementById('reset');
const savebutton = document.getElementById('save');
const gwamokinput = document.getElementById('gwamok');
let time = 0;
let timerId = null; // timer id in script scope
let time_running = false;
let current_saved = false;
document.getElementById('current_gwamok_front').style.display = 'none';
document.getElementById('current_gwamok').style.display = 'none';

timestartbutton.addEventListener('click', () => { //시작
    if (gwamokinput.value === ''){
        alert('과목명을 입력한 후 다시 시도해주세요');
    }
    else{
        if (timerId) return; // 이미 실행 중이면 중복 실행 방지
        document.getElementById('timetracker').innerText = time;
        document.getElementById('current_gwamok_front').style.display = 'block';
        document.getElementById('current_gwamok').style.display = 'block';
        document.getElementById('gwamok').style.display = 'none';
        document.getElementById('time_start').style.display = 'none';
        document.getElementById('current_gwamok').innerText = gwamokinput.value;
        document.getElementById('time_end').style.display = 'block';
        time_running = true;
        timerId = setInterval(() => {
            time += 1;
            document.getElementById('timetracker').innerText = time;
        }, 1000);
    }
});

timeendbutton.addEventListener('click', () => { //종료
    if (!timerId) return; // 실행 중이 아니면 무시
    clearInterval(timerId);
    timerId = null;
    time_running = false;
    document.getElementById('time_start').style.display = 'block';
    document.getElementById('time_end').style.display = 'none';
});

resetbutton.addEventListener('click', () => {
    if (current_saved === false){
        if (!confirm("저장되지 않은 데이터가 있습니다. 그래도 초기화하시겠습니까?")) {
            return;
        }
    }
    clearInterval(timerId);
    timerId = null;
    time = 0;
    document.getElementById('timetracker').innerText = '시간 측정을 시작해주세요';
    document.getElementById('current_gwamok_front').style.display = 'none';
    document.getElementById('current_gwamok').style.display = 'none';
    document.getElementById('gwamok').style.display = 'block';
    document.getElementById('time_start').style.display = 'block';
    time_running = false;
});

savebutton.addEventListener('click', () => {
    if (gwamokinput.value === ''){
        alert('과목명을 입력한 후 다시 시도해주세요');
    }
    else{
        if (time_running === true) { //시간 측정중인지 확인
            alert("시간 측정을 종료한 후 다시 시도해주세요.");
        }
        else {
            alert("저장되었습니다.");
            current_saved = true;
            //저장 파일 구현 필요
        }

    }
});
