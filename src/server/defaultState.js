export const defaultState = {
    users:[{
        id: "U1",
        name:"Dev"
    },{
        id: "U2",
        name:"Bob"
    }],
    groups:[{
        name:"To Do",
        id:"G1",
        owner:"U1"
    },{
        name:"In Progress",
        id:"G2",
        owner:"U1"
    },{
        name:"Done",
        id:"G3",
        owner:"U1"
    }],
    tasks:[{
        name:"Refactor tests",
        id:"T1",
        groups:"G1",
        owner:"U1",
        isComplete:false
    },{
        name:"Meet with CTO",
        id:"T2",
        groups:"G1",
        owner:"U1",
        isComplete:false
    },{
        name:"Compile ES6",
        id:"T3",
        groups:"G2",
        owner:"U2",
        isComplete:false
    },{
        name:"Update component snapshots",
        id:"T4",
        groups:"G2",
        owner:"U2",
        isComplete:false
    }],
    comments:[{
        owner:"U1",
        id:"C1",
        task:"T1",
        content:"Great work!!!"
    }]
}