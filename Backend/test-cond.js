let popup = {
    russian: true,
    ukrainian: true
}
let langArray=[];
            if (popup.russian && popup.russian ==true) {
                langArray.push('Ru')
            }
            if (popup.ukrainian && popup.ukrainian == true) {
                langArray.push('Ukr')
            }
            if (langArray.length>0) {
                console.log(langArray.join(', '))
            } else {
                console.log('none')
            }