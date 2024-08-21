//serial numbers path
const serial_number = document.getElementsByClassName("serial_number");

//function to update_serial_numbers
function update_serial_numbers(num){

    for (let i=0;i<num;i++){
        serial_number[i].innerHTML=i+1;
    }

    console.log(`${num} Serial numbers updated`);
}

//changing subjects

const all_subjects = [
    ["Communicative English","Chemistry","Linear Algebra & Calculus","Basic Civil Engineering","Basic Mechanical Engineering","Introduction to Programming","Engineering Physics","Differential Equations & Vector Calculus","Basic Electrical Engineering ","Basic Electronics Engineering","Data Structures"],
    ["Discrete Mathematics & Graph Theory","Universal Human Values","Principles of Artificial Intelligence","Advanced Data Structures & Algorithm Analysis","Object Oriented Programming Through Java","Environmental Science","Optimization Techniques","Probability & Statistics","Machine Learning","Database Management Systems","Digital Logic & Computer Organization"],
    [null],
    [null]
] 

const subject = document.getElementsByClassName("subject_name");

function update_subjects(subjectArray){
    if(subjectArray.length===1 || subjectArray==null){
        return;
    }
    for (let i=0;i<subjectArray.length;i++){
        subject[i].innerHTML = subjectArray[i];
    }
    console.log(`${subjectArray.length} subjects updated`);
}

//to manipulate PDFS
let downloads_array = [
    [ //[0,0]
        ["pdf/firstYear/example.pdf","pdf/firstYear/example.pdf","pdf/firstYear/example.pdf"],// QB, AB, CW for Communicative English - [0][0][]
        [null,"pdf/firstYear/example.pdf",null],// chemistry
        ["pdf/firstYear/example.pdf","pdf/firstYear/example.pdf","pdf/firstYear/example.pdf"],// Linear Algebra & Calculus
        ["pdf/firstYear/example.pdf","pdf/firstYear/example.pdf","pdf/firstYear/example.pdf"],// Basic Civil Engineering
        ["pdf/firstYear/example.pdf","pdf/firstYear/example.pdf","pdf/firstYear/example.pdf"],// Basic Mechanical Engineering
        ["pdf/firstYear/example.pdf","pdf/firstYear/example.pdf","pdf/firstYear/example.pdf"],// Introduction to Programming
        ["pdf/firstYear/example.pdf","pdf/firstYear/example.pdf","pdf/firstYear/example.pdf"],// Engineering Physics
        ["pdf/firstYear/example.pdf","pdf/firstYear/example.pdf","pdf/firstYear/example.pdf"],// Differential Equations & Vector Calculus
        ["pdf/firstYear/example.pdf","pdf/firstYear/example.pdf","pdf/firstYear/example.pdf"],// Basic Electrical Engineering
        ["pdf/firstYear/example.pdf","pdf/firstYear/example.pdf","pdf/firstYear/example.pdf"],// Basic Electronics Engineering
        ["pdf/firstYear/example.pdf",null,"pdf/firstYear/example.pdf"] // Data Structures
    ], //1st year
    [null], //2nd year
    [null], //3rd year
    [null]  //4th year
];


//to manipulate table rows

// const new_table_row = document.createElement('tr');
// const new_table_cell = document.createElement('td');
// const new_table_anchor_tag = document.createElement('a');
// new_table_anchor_tag.innerHTML = "Question";
// new_table_cell.appendChild(new_table_anchor_tag);
// // new_table_row.appendChild(new_table_cell);
// new_table_anchor_tag.setAttribute("href","");
// new_table_anchor_tag.setAttribute("download","");
// new_table_anchor_tag.setAttribute("class","pdfcell");
// document.getElementById("table_body").children[2].insertBefore(new_table_cell,document.getElementById("table_body").children[2].children[2])


function create_table_row(){

    const new_table_row = document.createElement('tr');
    
    //table cells
    let serial_number_cell;
    let subject_name_cell;
    let question_bank_cell;
    let answer_bank_cell;
    let class_work_cell;

    for(let i=0;i<5;i++){
        switch(i){
            case 0:
                const spanTag = document.createElement('span');
                spanTag.setAttribute("class","serial_number");
                spanTag.innerHTML = "number";

                const table_cell_1 = document.createElement('td');
                table_cell_1.appendChild(spanTag);
                new_table_row.appendChild(table_cell_1);

                console.log("1st cell created successfully");
                break;
            case 1:
                const spanTagForSubject = document.createElement('span');
                spanTagForSubject.setAttribute("class","subject_name");
                spanTagForSubject.innerHTML = "subject";

                const table_cell_2= document.createElement('td');
                table_cell_2.appendChild(spanTagForSubject);
                new_table_row.appendChild(table_cell_2);

                console.log("2nd cell created successfully");
                break;
            case 2:
                const a_tag_for_qb = document.createElement('a')
                a_tag_for_qb.innerHTML = "Not Available ";
                
                a_tag_for_qb.setAttribute("class","question_banks pdfcell");

                a_tag_for_qb.setAttribute("href","");
                a_tag_for_qb.setAttribute("download","");

                const table_cell_3 = document.createElement('td');
                table_cell_3.appendChild(a_tag_for_qb);
                new_table_row.append(table_cell_3);

                console.log("3rd cell added successfully");
                break;
            case 3:
                const a_tag_for_ab = document.createElement('a')
                a_tag_for_ab.innerHTML = "Not Available";
                
                a_tag_for_ab.setAttribute("class","answer_banks pdfcell");
                a_tag_for_ab.setAttribute("href","");
                a_tag_for_ab.setAttribute("download","");

                const table_cell_4 = document.createElement('td');
                table_cell_4.appendChild(a_tag_for_ab);
                new_table_row.append(table_cell_4);

                console.log("4th cell added successfully");
                break;
            case 4:
                const a_tag_for_cw = document.createElement('a')
                a_tag_for_cw.innerHTML = "Not Available";
                
                a_tag_for_cw.setAttribute("class","class_works pdfcell");
                a_tag_for_cw.setAttribute("href","");
                a_tag_for_cw.setAttribute("download","");

                const table_cell_5 = document.createElement('td');
                table_cell_5.appendChild(a_tag_for_cw);
                new_table_row.append(table_cell_5);

                console.log("5th cell added successfully");
                break;
            default:
                console.log("ErroR");
        }
    }

    return new_table_row;
}

function create_table(rows){
    for(let i=0;i<rows;i++){
        document.getElementById("table_body").appendChild(create_table_row());
        console.log(`ROW ${i+1} SUCCESSFULLY APPENDED TO TABLE BODY`);
    }
}

function upload_pdfs(year,serial_number){
    const [destructured_value] = downloads_array[year];
    if (destructured_value==null){
        console.log(`ROW Unavailable`)
        return;
    }
    for(let i=0;i<serial_number;i++){
        //[null]
        if(false){
        }else{
            if(downloads_array[year][i][0]==null){
                console.log(`[${year}] [${i}] [${0}] unavailable`);        
            }else{
                document.getElementsByClassName("question_banks")[i].setAttribute("href",downloads_array[year][i][0]);
                document.getElementsByClassName("question_banks")[i].innerHTML = "Available";
                console.log(`[${year}] [${i}] [${0}] uploaded`);        
            }
            if(downloads_array[year][i][1]==null){
                console.log(`[${year}] [${i}] [${0}] unavailable`);
            }else{
                document.getElementsByClassName("answer_banks")[i].setAttribute("href",downloads_array[year][i][1]);
                document.getElementsByClassName("answer_banks")[i].innerHTML = "Available";
                console.log(`[${year}] [${i}] [${2}] uploaded`);
            }
            if(downloads_array[year][i][2]==null){
                console.log(`[${year}] [${i}] [${0}] unavailable`);      
            }else{
                document.getElementsByClassName("class_works")[i].setAttribute("href",downloads_array[year][i][2]);
                document.getElementsByClassName("class_works")[i].innerHTML = "Available";  
                console.log(`[${year}] [${i}] [${2}] uploaded`);
            }
        }
    }
    console.log("upload_pdf_function executed");
}


function main(year){
    let total_subjects;
    if (all_subjects[year][0]==null){
        total_subjects = 0;
    }
    else{
        total_subjects = all_subjects[year].length;
    }
    create_table(total_subjects);
    update_serial_numbers(total_subjects);
    update_subjects(all_subjects[year]);
    upload_pdfs(year,all_subjects[year].length);
    console.log(`PDFs for year ${year+1} uploaded`);
    return;
}

const selectors = document.getElementsByClassName("hyper_links_to_table");

function main_control(){
    const table_body = document.getElementById("table_body");
    const new_row = document.createElement("tr");
    const new_cell = document.createElement("td");
    new_cell.innerHTML = "Select the appropriate year to view the available pdfs";
    new_cell.style.textTransform = "upperCase";
    new_cell.style.color="black";
    new_row.appendChild(new_cell);
    table_body.appendChild(new_row);
    new_cell.setAttribute("colSpan","5");
    table_body.style.height = "60vh";

    for(let i=0;i<4;i++){
        document.getElementsByClassName("years_box")[i].addEventListener("click",function(){
            if (i<2){
                table_body.innerHTML="";
                console.log("table cleared")
                main(i);
            }else if(i>=2){
                table_body.innerHTML="";
                const another_new_row = document.createElement("tr");
                const another_new_cell = document.createElement("td");
                another_new_cell.innerHTML = "Currently not available";
                another_new_cell.setAttribute("colSpan","5");
                another_new_cell.style.color="black";
                another_new_row.appendChild(another_new_cell);
                table_body.appendChild(another_new_row);
                another_new_cell.style.textTransform="upperCase";
            }
        })
    }
}
// main_control();



//search fuction

const caption = document.getElementsByClassName("year_caption")[0];

const searchBar = document.getElementById("searchBar");

const searchButton = document.getElementById("search_button");

searchButton.addEventListener("click", function() {
    const output = searchBar.value.toLowerCase(); // Use 'value' to get the input text
    caption.innerHTML = output;
    searchBar.value = "";
});

searchBar.addEventListener("click",function(){
    document.getElementById("search_button").setAttribute("placeholder","Enter the full name of the subject..");
})

document.getElementById("searchBar").setAttribute("placeholder","Enter the subject's full name: ");


// caption.innerHTML = "hello ";

// const address = "pdf/firstYear/example.pdf";

// const new_row = create_table_row();
// const table_body_ = document.getElementById("table_body");
// table_body_.appendChild(new_row);

//testing
// update_serial_numbers(11);
// update_subjects(all_subjects[0]);
// upload_pdfs(0,11);
// create_table(11);
// main(0);


// document.getElementsByClassName("question_banks")[0].setAttribute("href",downloads_array[0][0][0]);
// document.getElementsByClassName("class_works")[0].innerHTML = "Not available";