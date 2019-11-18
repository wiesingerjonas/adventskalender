<<<<<<< HEAD
let d = new Date();
const thisDay = d.getDate();


window.addEventListener('load', () => {
  document.getElementById('loading').style.display = 'none';

  const days = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),
    document.getElementById('9'),
    document.getElementById('10'),
    document.getElementById('11'),
    document.getElementById('12'),
    document.getElementById('13'),
    document.getElementById('14'),
    document.getElementById('15'),
    document.getElementById('16'),
    document.getElementById('17'),
    document.getElementById('18'),
    document.getElementById('19'),
    document.getElementById('20'),
    document.getElementById('21'),
    document.getElementById('22'),
    document.getElementById('23'),
    document.getElementById('24')
  ];
  const imageBox = document.getElementById('imageBox');
  const wrapper = document.getElementById('wrapper');
  let pic = document.getElementById('pic');
  let x = document.getElementById('close');

  for (let i = 0; i < thisDay-1 && i < 24; i++) {
    days[i].style.backgroundColor = '#ededed';
    days[i].style.color = '#a17f1a';
  }
  if(thisDay < 25){
    days[thisDay-1].style.backgroundColor = 'white';
    days[thisDay-1].style.color = '#a17f1a';
    days[thisDay-1].style.border = '5px solid #a17f1a';
  }

  days[0].addEventListener('click', () => {
    if(thisDay >= 1){
      pic.setAttribute("src", "./oliver/1.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }

  });
  days[1].addEventListener('click', () => {
    if(thisDay >= 2){
      pic.setAttribute("src", "./oliver/2.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[2].addEventListener('click', () => {
    if(thisDay >= 3){
      pic.setAttribute("src", "./oliver/3.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[3].addEventListener('click', () => {
    if(thisDay >= 4){
      pic.setAttribute("src", "./oliver/4.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[4].addEventListener('click', () => {
    if(thisDay >= 5){
      pic.setAttribute("src", "./oliver/5.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[5].addEventListener('click', () => {
    if(thisDay >= 6){
      pic.setAttribute("src", "./oliver/6.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[6].addEventListener('click', () => {
    if(thisDay >= 7){
      pic.setAttribute("src", "./oliver/7.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[7].addEventListener('click', () => {
    if(thisDay >= 8){
      pic.setAttribute("src", "./oliver/8.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[8].addEventListener('click', () => {
    if(thisDay >= 9){
      pic.setAttribute("src", "./oliver/9.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[9].addEventListener('click', () => {
    if(thisDay >= 10){
      pic.setAttribute("src", "./oliver/10.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[10].addEventListener('click', () => {
    if(thisDay >= 11){
      pic.setAttribute("src", "./oliver/11.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[11].addEventListener('click', () => {
    if(thisDay >= 12){
      pic.setAttribute("src", "./oliver/12.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[12].addEventListener('click', () => {
    if(thisDay >= 13){
      pic.setAttribute("src", "./oliver/13.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[13].addEventListener('click', () => {
    if(thisDay >= 14){
      pic.setAttribute("src", "./oliver/14.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[14].addEventListener('click', () => {
    if(thisDay >= 15){
      pic.setAttribute("src", "./oliver/15.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[15].addEventListener('click', () => {
    if(thisDay >= 16){
      pic.setAttribute("src", "./oliver/16.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[16].addEventListener('click', () => {
    if(thisDay >= 17){
      pic.setAttribute("src", "./oliver/17.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[17].addEventListener('click', () => {
    if(thisDay >= 18){
      pic.setAttribute("src", "./oliver/18.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[18].addEventListener('click', () => {
    if(thisDay >= 19){
      pic.setAttribute("src", "./oliver/19.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[19].addEventListener('click', () => {
    if(thisDay >= 20){
      pic.setAttribute("src", "./oliver/20.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[20].addEventListener('click', () => {
    if(thisDay >= 21){
      pic.setAttribute("src", "./oliver/21.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[21].addEventListener('click', () => {
    if(thisDay >= 22){
      pic.setAttribute("src", "./oliver/22.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[22].addEventListener('click', () => {
    if(thisDay >= 23){
      pic.setAttribute("src", "./oliver/23.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });
  days[23].addEventListener('click', () => {
    if(thisDay >= 24){
      pic.setAttribute("src", "./oliver/24.png");

      imageBox.style.display = 'flex';
      wrapper.style.display = 'none';
    }
  });

  x.addEventListener('click', () => {
    imageBox.style.display = 'none';
    wrapper.style.display = 'block';
  });
});
=======
let d = new Date();
const thisDay = d.getDate();


window.addEventListener('load', () => {
  const days = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),
    document.getElementById('9'),
    document.getElementById('10'),
    document.getElementById('11'),
    document.getElementById('12'),
    document.getElementById('13'),
    document.getElementById('14'),
    document.getElementById('15'),
    document.getElementById('16'),
    document.getElementById('17'),
    document.getElementById('18'),
    document.getElementById('19'),
    document.getElementById('20'),
    document.getElementById('21'),
    document.getElementById('22'),
    document.getElementById('23'),
    document.getElementById('24')
  ];
  const imageBox = document.getElementById('imageBox');
  const wrapper = document.getElementById('wrapper');
  let pic = document.getElementById('pic');
  let x = document.getElementById('close');

  for (let i = 0; i < thisDay-1 && i < 24; i++) {
    days[i].style.backgroundColor = '#ededed';
  }
  if(thisDay < 25){
    days[thisDay-1].style.backgroundColor = 'white';
    days[thisDay-1].style.border = '5px solid red';
  }

  days[0].addEventListener('click', () => {
    if(thisDay >= 1){
      pic.setAttribute("src", "./oliver/1.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }

  });
  days[1].addEventListener('click', () => {
    if(thisDay >= 2){
      pic.setAttribute("src", "./oliver/2.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[2].addEventListener('click', () => {
    if(thisDay >= 3){
      pic.setAttribute("src", "./oliver/3.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[3].addEventListener('click', () => {
    if(thisDay >= 4){
      pic.setAttribute("src", "./oliver/4.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[4].addEventListener('click', () => {
    if(thisDay >= 5){
      pic.setAttribute("src", "./oliver/5.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[5].addEventListener('click', () => {
    if(thisDay >= 6){
      pic.setAttribute("src", "./oliver/6.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[6].addEventListener('click', () => {
    if(thisDay >= 7){
      pic.setAttribute("src", "./oliver/7.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[7].addEventListener('click', () => {
    if(thisDay >= 8){
      pic.setAttribute("src", "./oliver/8.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[8].addEventListener('click', () => {
    if(thisDay >= 9){
      pic.setAttribute("src", "./oliver/9.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[9].addEventListener('click', () => {
    if(thisDay >= 10){
      pic.setAttribute("src", "./oliver/10.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[10].addEventListener('click', () => {
    if(thisDay >= 11){
      pic.setAttribute("src", "./oliver/11.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[11].addEventListener('click', () => {
    if(thisDay >= 12){
      pic.setAttribute("src", "./oliver/12.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[12].addEventListener('click', () => {
    if(thisDay >= 13){
      pic.setAttribute("src", "./oliver/13.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[13].addEventListener('click', () => {
    if(thisDay >= 14){
      pic.setAttribute("src", "./oliver/14.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[14].addEventListener('click', () => {
    if(thisDay >= 15){
      pic.setAttribute("src", "./oliver/15.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[15].addEventListener('click', () => {
    if(thisDay >= 16){
      pic.setAttribute("src", "./oliver/16.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[16].addEventListener('click', () => {
    if(thisDay >= 17){
      pic.setAttribute("src", "./oliver/17.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[17].addEventListener('click', () => {
    if(thisDay >= 18){
      pic.setAttribute("src", "./oliver/18.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[18].addEventListener('click', () => {
    if(thisDay >= 19){
      pic.setAttribute("src", "./oliver/19.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[19].addEventListener('click', () => {
    if(thisDay >= 20){
      pic.setAttribute("src", "./oliver/20.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[20].addEventListener('click', () => {
    if(thisDay >= 21){
      pic.setAttribute("src", "./oliver/21.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[21].addEventListener('click', () => {
    if(thisDay >= 22){
      pic.setAttribute("src", "./oliver/22.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[22].addEventListener('click', () => {
    if(thisDay >= 23){
      pic.setAttribute("src", "./oliver/23.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });
  days[23].addEventListener('click', () => {
    if(thisDay >= 24){
      pic.setAttribute("src", "./oliver/24.png");

      imageBox.style.display = 'block';
      wrapper.style.display = 'none';
    }
  });


});
>>>>>>> edb9aaac9a5e8d668b27bda8f8b075986092f130
