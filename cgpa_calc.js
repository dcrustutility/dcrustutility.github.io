        function calcCGPA()
        {
            var row=1;
            var totalrows=8;
            var sgpa_sum=0;
            var no_of_sgpa=0;
            for(row=1;row<=totalrows;row++)
            {
                var sgpa=document.getElementById("sgpa"+row).value;
                if(sgpa>0)
                {
                    sgpa=sgpa*1;
                    storeValues(row);
                    sgpa_sum=(sgpa_sum*1)+sgpa;
                    no_of_sgpa+=1;
                }
            }
            //alert(sgpa_sum+" "+no_of_sgpa);
            var cgpa=sgpa_sum/no_of_sgpa;
			cgpa=cgpa.toPrecision(3);
            document.getElementById("cgpa").value=cgpa;
            var percentage=cgpa*9.5;
            document.getElementById("per").value=percentage;

        }
        function clearAll()
        {
            var row=1;
            var totalrows=8;
            for(row=1;row<=totalrows;row++)
            {
                document.getElementById("sgpa"+row).value=null;
                if (typeof(Storage) !== "undefined") {
                localStorage.removeItem("sgpa"+row);
                }
            }
            document.getElementById("cgpa").value=null;
            document.getElementById("per").value=null;
            
        }
        function loadValues()
        {
            if (typeof(Storage) !== "undefined") {
                var row=1;
                var totalrows=8;
                for(;row<=totalrows;row++)
                {
                var sgpa=localStorage.getItem("sgpa"+row);
                document.getElementById("sgpa"+row).value=sgpa;
                }
                calcCGPA();
            }
        }
        function storeValues(row)
        {
            if (typeof(Storage) !== "undefined") {
                var sgpa=document.getElementById("sgpa"+row).value;
                localStorage.setItem("sgpa"+row, sgpa);
            }
        }