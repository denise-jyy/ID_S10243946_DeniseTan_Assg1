
    var count = 0;
    var inc = 0;
    margin = 0;
    var slider = document.getElementsByClassName("sliderWidth")[0];
    var itemDisplay = 0;
    if (screen.width > 990) {
      itemDisplay = document.getElementsByClassName("sliderContainer")[0].getAttribute("itemDisplayd");
      margin = itemDisplay * 5;
    }
    if (screen.width > 280 && screen.width < 700) {
      itemDisplay = document.getElementsByClassName("sliderContainer")[0].getAttribute("itemDisplaym");
      margin = itemDisplay * 20;
    }


    var items = document.getElementsByClassName("homeShop");
    var itemleft = items.length % itemDisplay;
    var itemslide = Math.floor(items.length / itemDisplay) - 1;
    for (let i = 0; i < items.length; i++) {
      items[i].style.width = (screen.width / itemDisplay) - margin + "px";
    }

    function next() {
      if (inc !== itemslide + itemleft) {
        if (inc == itemslide) {
          inc = inc + itemleft;
          count = count - (screen.width / itemDisplay) * itemleft;
        }
        else {
          inc++;
          count = count - screen.width;
        }
      }
      slider.style.left = count + "px";
    }

    function prev() {
      if (inc !== 0) {
        if (inc == itemleft) {
          inc = inc - itemleft;
          count = count + (screen.width / itemDisplay) * itemleft;
        }
        else {
          inc--;
          count = count + screen.width;
        }
      }
      console.log(inc)
      slider.style.left = count + "px";
    }

    function showQuestionmessage() {
        alert("Question submitted!");
    }

    function shopMap() {
        var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

    function showSuccessMessage() {
        alert("Booking is confirmed!");
      }


    var faq = document.getElementsByClassName("faqPage");
    var i;
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        });
    }