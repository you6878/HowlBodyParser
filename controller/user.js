/**
 * Created by myeongsic on 2017. 3. 29..
 */


exports.createUser = function (req, res) {
    //생성되는 코드 디비로 입력 부분
    res.send("유저가 생성되었습니다.")

}

exports.readUser = function (req, res) {
    //확인되는 코드
    res.send("유저가 확인되었습니다.")

}

exports.updateUser = function (req, res) {
    //수정되는 코드
    res.send("유저가 수정되었습니다.")
}

exports.deleteUser = function (req, res) {

    //삭제 코드
    res.send("유저가 삭제되었습니다.")
}