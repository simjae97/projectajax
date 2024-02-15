//let i = 0;
//getBno();
//
//function getBno(){
//    $.ajax({
//        url: "/show/get.do",
//        method: "get",
//        success : function result(resultValue){
//                i = resultValue;
//                console.log(resultValue);
//                doGet();
//        }
//    })
//}

var currentUrl = window.location.href;

// URL에서 쿼리 파라미터 가져오기
var urlParams = new URLSearchParams(currentUrl.split('?')[1]);

// bno 파라미터 값 가져오기
var i = urlParams.get('bno');
doGet();

function doGet(){
/*    i = ge*/
    console.log(i);
    $.ajax({
        url: "/show/get",
        method: "get",
        data: { i: i },
        success : function result(resultValue){
        console.log(resultValue)
        // 통신 응답 결과를 html형식으로 출력 해주기
        //1.어디에
        let tbody =document.querySelector('table tbody')
        // 2. 무엇을
        let html = ""
        html += `<tr>
        <th>${resultValue.bno}</th>
        <th>${resultValue.title}</th>
        <th>${resultValue.content}</th>
        </tr>
        </tbody>
        </table>
        <a href=/todo.html> 모든 글 보기 </a> <a href=/rework.html?bno=${i}>글 수정하기</a> <button type="button" onclick="doDel()"> 삭제 </button>`
        tbody.innerHTML = html;
        }
    })
}
function doDel(){
    $.ajax({
            url: "/show/delete.to",
            method: "delete",
            data: { i: i },
            success : function result(resultValue){
                window.location = `/todo.html`
            }
        })
}
