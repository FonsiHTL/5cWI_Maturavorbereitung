interface student {
    firstname: string
    lastname: string
    age: number
}

const student: student[] = [
    {
        firstname: 'Max',
        lastname: 'Mustermann',
        age: 20
    },
    {
        firstname: 'Erika',
        lastname: 'Musterfrau',
        age: 22
    },
    {
        firstname: 'Lukas',
        lastname: 'Wagner',
        age: 17
    }
]

const mapStudent = () => {
    return student.map(student => student.firstname);
    
}