console.log("todo.js실행");
doGet();// js실행시 최초로 한번 실행
//1등록
function doPost(){
    console.log("doPost")
    // 1. HTML에서 입력받은 값 가져오기
    let content = document.querySelector("#content").value;
    let title = document.querySelector("#title").value;

    // 2. 객체화
    let info= {
        title : title,
       content : content
    }
    // 3. 컨트롤에게 요청 / 응 답
    $.ajax({
        url : "/todo/post.do",
        method:"post",
        data : info,
        success : function(result){
            console.log(result)
            if(result == true){
                //화면 갱신    // 4.   출력
                doGet();
            }
        }
    })
}
//function goshow(i) {
//    $.ajax({
//        url: "/show/set.do",
//        method: "post",
//        data: { i: i }, // data 속성은 객체 형태여야 합니다.
//        success: function(result) {
//            console.log(result);
//            if (result === true) {
//                window.location = `/show.html?bno=${i}` // URL이 올바르게 닫힌 것을 확인하세요.
//            }
//        }
//    });
//}
//
////2출력
//function doGet(){
//    $.ajax({
//        url: "/todo/get.do",
//        method: "get",
//        success : function result(resultValue){
//        console.log(resultValue)
//        // 통신 응답 결과를 html형식으로 출력 해주기
//        //1.어디에
//        let tbody =document.querySelector('table tbody')
//        // 2. 무엇을
//        let html = ""
//        for(let i = 0 ; i<resultValue.length; i++){
//                        html += `<tr onclick=goshow(${resultValue[i].bno}) style="cursor:pointer;">
//                        <th>${resultValue[i].bno}</th>
//                        <th>${resultValue[i].title}</th>
//                        <th>${resultValue[i].content}</th>
//                    </tr>`
//        }
//        tbody.innerHTML = html;
//        }
//    })
//}

function doGet(){
    $.ajax({
        url: "/todo/get.do",
        method: "get",
        success : function result(resultValue){
        console.log(resultValue)
        // 통신 응답 결과를 html형식으로 출력 해주기
        //1.어디에
        let tbody =document.querySelector('table tbody')
        // 2. 무엇을
        let html = ""
        for (let i = 0; i < resultValue.length; i++) {
            html += `<tr onclick="window.location = '/show.html?bno=${resultValue[i].bno}';" style="cursor:pointer;">
                    <th>${resultValue[i].bno}</th>
                    <th>${resultValue[i].title}</th>
                    <th>${resultValue[i].content}</th>
                </tr>`;
        }
        tbody.innerHTML = html;
        }
    })
}
//3 수정
function doPut(){

}
//4 삭제
function doDelete(){

}