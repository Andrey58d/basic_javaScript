var i = 1
var j = 1
var k = 1
console.log('perulangan while')
while(j<=5){
    console.log(j)
    j+=1
}
console.log('\n')

// perulangan dengan break

for(l=1;l<=5;l++){
    console.log(l)
    if(l==3){
        break
    }
}
console.log('\n')

//tugas cina
var r = 1
console.log('room')
for(r= 1; r<= 15; r++){
    if(r == 13){
        continue;
    }
    console.log(r)
}