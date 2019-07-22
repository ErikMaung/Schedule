function schedule(id, firstname, lastname, class1, class2, class3, class4, class5, class6, class7, class8) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.name = `${firstname} ${lastname}`;
    this.class1 = class1;
    this.class2 = class2;
    this.class3 = class3;
    this.class4 = class4;
    this.class5 = class5;
    this.class6 = class6;
    this.class7 = class7;
    this.class8 = class8;
}
var stu1 = new schedule(1, 'Luciano', 'Lim', '', 'R102', 'E6', 'B14', 'C2', 'D3', 'R210', '')
var stu2 = new schedule(2, 'Erik', 'Maung', '', 'B8', 'D3', 'B14', 'C2', 'D3', 'R210', 'E4')
var stu3 = new schedule(3, 'Angelo', 'Legaspi', 'E4', 'C16', 'D3', 'B12', 'C2', 'D5', 'R203', 'C4')
