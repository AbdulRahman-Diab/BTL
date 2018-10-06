
var LIndex = 0, RIndex = 0, db = firebase.firestore();
//$("#leftNum").append("<li> 11111111111 </li>");
var LeftNum = { Num: LIndex };
db.collection(count).add(LeftNum);

var RightNum = { Num: RIndex };
db.collection(count).add(RightNum);



function LeftCountup() {
    LIndex++;
    var id0 = tasks.docs[0].id;
    db.collection(count).doc(id0).set({ Num: LIndex });

}
function LeftCountdown() {
    LIndex--;
    var id0 = tasks.docs[0].id;
    db.collection(count).doc(id0).set({ Num: LIndex });
}

function RightCountup() {
    RIndex++;
    var id1 = tasks.docs[1].id;
    db.collection(count).doc(id1).set({ Num: RightNum });
}
function RightCountdown() {
    RIndex--;
    var id1 = tasks.docs[1].id;
    db.collection(count).doc(id1).set({ Num: RightNum });
}
