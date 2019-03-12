        function showTable()
        {
            document.getElementById("tableArea").hidden=false;
        }
        function calcSGPA()
        {
            var row=1;
            var totalrows=10;
            var totalCredits=0;
            var totalCreditPoints=0;
            for(row=1;row<=totalrows;row++)
            {
                var credit=document.getElementById("credit"+row).value;
                var points=document.getElementById("points"+row).value;
                //alert(row+" "+credit+" "+points);
                if(credit>-1&&points>-1)
                {
                    credit=credit*1;
                    totalCredits=totalCredits+credit;
                    totalCreditPoints=totalCreditPoints+(credit*points);
                }
            }
            //alert(totalCreditPoints+" : "+totalCredits);
            var sgpa=totalCreditPoints/totalCredits;
			sgpa=sgpa.toPrecision(3);
            document.getElementById("sgpa1").value=sgpa;
            document.getElementById("sgpa2").value=sgpa;
            var percentage=sgpa*9.5;
            document.getElementById("per1").value=percentage;
            document.getElementById("per2").value=percentage;

        }
        function clearAll()
        {
            var row=1;
            var totalrows=10;
            for(row=1;row<=totalrows;row++)
            {
                document.getElementById("maxses"+row).value=null;
                document.getElementById("maxtheo"+row).value=null;
                document.getElementById("obtses"+row).value=null;
                document.getElementById("obttheo"+row).value=null;
                document.getElementById("subname"+row).value=null;
                document.getElementById("points"+row).value=null;
                document.getElementById("grade"+row).value=null;

                if (typeof(Storage) !== "undefined") {
                localStorage.removeItem("maxses"+row);
                localStorage.removeItem("maxtheo"+row);
                localStorage.removeItem("obtses"+row);
                localStorage.removeItem("obttheo"+row);
                localStorage.removeItem("subname"+row);
                localStorage.removeItem("grade"+row);
                localStorage.removeItem("points"+row);
                }
            }
            
        }
        function loadValues()
        {
            if (typeof(Storage) !== "undefined") {
                var row=1;
                var totalrows=10;
                for(;row<=totalrows;row++)
                {
                var maxses=localStorage.getItem("maxses"+row);
                var maxtheo=localStorage.getItem("maxtheo"+row);
                var obtses=localStorage.getItem("obtses"+row);
                var obttheo=localStorage.getItem("obttheo"+row);
                var subname=localStorage.getItem("subname"+row);
                var credit=localStorage.getItem("credit"+row);
                var grade=localStorage.getItem("grade"+row);
                var points=localStorage.getItem("points"+row);
                document.getElementById("maxses"+row).value=maxses;
                document.getElementById("maxtheo"+row).value=maxtheo;
                document.getElementById("obtses"+row).value=obtses;
                document.getElementById("obttheo"+row).value=obttheo;
                document.getElementById("subname"+row).value=subname;
                document.getElementById("credit"+row).value=credit;
                document.getElementById("grade"+row).value=grade;
                document.getElementById("points"+row).value=points;
                }
                calcSGPA();
            }
        }
        function storeValues(row)
        {
            if (typeof(Storage) !== "undefined") {
                var maxses=document.getElementById("maxses"+row).value;
                var maxtheo=document.getElementById("maxtheo"+row).value;
                var obtses=document.getElementById("obtses"+row).value;
                var obttheo=document.getElementById("obttheo"+row).value;
                var subname=document.getElementById("subname"+row).value;
                var credit=document.getElementById("credit"+row).value;
                var grade=document.getElementById("grade"+row).value;
                var points=document.getElementById("points"+row).value;
                localStorage.setItem("maxses"+row, maxses);
                localStorage.setItem("maxtheo"+row, maxtheo);
                localStorage.setItem("obtses"+row, obtses);
                localStorage.setItem("obttheo"+row, obttheo);
                localStorage.setItem("subname"+row, subname);
                localStorage.setItem("credit"+row, credit);
                localStorage.setItem("grade"+row, grade);
                localStorage.setItem("points"+row, points);
            }
        }
        function setPoints(row,points,grade)
        {
            document.getElementById("grade"+row).value=grade;
            document.getElementById("points"+row).value=points;
        }
        function calcGrade(row)
        {
            var maxses=document.getElementById("maxses"+row).value*1;
            var maxtheo=document.getElementById("maxtheo"+row).value*1;
            var obtses=document.getElementById("obtses"+row).value*1;
            var obttheo=document.getElementById("obttheo"+row).value*1;
            var percentage=((obtses+obttheo)/(maxses+maxtheo))*100;

            var percentageSes=-1;
            var percentageTheo=-1;
            
            if(percentage>=90)
            {
                setPoints(row,10,"A+");
            }else if(percentage<90&&percentage>=80)
            {
                setPoints(row,9,"A");
            }else if(percentage<80&&percentage>=70)
            {
                setPoints(row,8,"B+");
            }else if(percentage<70&&percentage>=62)
            {
                setPoints(row,7,"B");
            }else if(percentage<62&&percentage>=55)
            {
                setPoints(row,6,"C+");
            }else if(percentage<55&&percentage>=46)
            {
                setPoints(row,5,"C");
            }
            else if(percentage<46&&percentage>=40)
            {
                setPoints(row,4,"D");
            }
            else if(percentage<40)
            {
                setPoints(row,0,"F");
            }
            else if(percentage==0)
                setPoints(row,-1,null);
            else
                setPoints(row,-1,null);


                if(maxses>0)
                {
                   percentageSes=(obtses/maxses)*100;
                   if(percentageSes<40)
                        setPoints(row,0,"F");  
                }
                if(maxtheo>0)
                {
                   percentageTheo=(obttheo/maxtheo)*100;
                   if(percentageTheo<40)
                        setPoints(row,0,"F");  
                }


            if(!isNaN(percentage))
                storeValues(row);

            calcSGPA();
            //document.getElementById("grade"+row).value=percentage;
        }
