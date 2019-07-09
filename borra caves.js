/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 <script>
          /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
          var prevScrollpos = window.pageYOffset;
          window.onscroll = function() {
          var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
          } else {
          document.getElementById("navbar").style.top = "-50px";
          }
          prevScrollpos = currentScrollPos;
          }
       
        </script>


