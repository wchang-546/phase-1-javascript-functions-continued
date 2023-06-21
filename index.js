function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}


function wrapAdjective(highlight, msg = `You are`){
    const innerFunction = function(emphatic){
        return `${msg} ${highlight}${emphatic}${highlight}!`
    }
    return innerFunction;
    }