var currentUrl = window.location.href;

// URL에서 쿼리 파라미터 가져오기
var urlParams = new URLSearchParams(currentUrl.split('?')[1]);

// bno 파라미터 값 가져오기
var i = urlParams.get('bno');

function doPost(){
    console.log("doPost")
    // 1. HTML에서 입력받은 값 가져오기
    let content = document.querySelector("#content").value;
    let title = document.querySelector("#title").value;

    // 2. 객체화
    let info= {
        bno : i,
        title : title,
       content : content
    }
    // 3. 컨트롤에게 요청 / 응 답
    $.ajax({
        url : "/show/put.do",
        method:"post",
        data : info,
        success : function(result){
            console.log(result)
            if(result == true){
                //화면 갱신    // 4.   출력
                window.location = `/show.html?bno=${i}`
            }
        }
    })
}