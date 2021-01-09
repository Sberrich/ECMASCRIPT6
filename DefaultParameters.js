/*
        
    Default Parameters

*/

function showmyinfo(username = 'new', role = 'new', theme = 'new')
{

    return `Hello ${username}, Your Role Is : ${role}, Website Theme is : ${theme}`;


}

console.log(showmyinfo());