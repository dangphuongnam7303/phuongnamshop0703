const blogCategories = [
    {
      id: 1,
      title: 'Love story',
      img: './src/img/blog/love.jpeg',
      content: 'My story in love',
      detail:'This is my first love, this song expresses the desires and moods of being a teenager',
      link: 'https://www.facebook.com/DangPhuongNam733/videos/494072851213138',
      time: 14,
  
    },
    {
      id: 2,
      title: 'My love',
      img: './src/img/blog/love2.jpg',
      content: 'Love song by Phuong Nam',
      detail:'What is love that makes me fall in love with life?',
      link: 'https://www.facebook.com/DangPhuongNam733/videos/672582853362136',
      time: 5,
  
    },
    {
      id: 3,
      title: 'Point of view in life',
      img: './src/img/blog/life.jpg',
      content: 'Point of view in life',
      detail:'I am a person who is not afraid to be different',
      link: 'https://www.facebook.com/DangPhuongNam733/videos/535153427829288',
      time: 0.5,
  
    },
  
    {
      id: 4,
      title: 'Love in University',
      img: './src/img/blog/love3.jpg',
      content: 'Love in University',
      detail:'I fall in love width my friend in university',
      link: 'https://www.facebook.com/DangPhuongNam733/videos/316590226768763',
      time: 3,
    },
  
    {
      id: 5,
      title: 'Play soccer',
      img: './src/img/blog/soccer.jpg',
      content: 'Play soccer',
      detail:'My team entered the tournament for the first time and became the dark horse of the tournament',
      link: 'https://www.facebook.com/fpolyhn/photos/320315116860652',
      time: 2,
    },
  
    {
      id: 6,
      title: 'My achievement',
      img: './src/img/blog/achievement.jpg',
      content: 'The first achievement in university',
      detail:'I have achieved the first achievement in university',
      link: 'https://www.facebook.com/fpolyhn/videos/226221519679958',
      time : 1
  
    }
  
  
  
  ];
  function showProduct(data) {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    for (let item of data) {
        main.innerHTML += `
        <div class="menu-main">
                      <h1 style="text-align:center;width:300px">${item.title}</h1>
                     <a href='${item.link}'><img style="border-radius: 15px; ;" src="${item.img}" alt="" width="300px" height="200px"></a> 
                      <div style="margin-top: 15px;">
                          <a id='song_name' style="width: 300px;font-weight: bold;font-size: 20px;text-decoration: none;" href="${item.link}">${item.content}</a>
                          <p style="width: 300px;margin: 0px;margin-top:16px">${item.detail}</p>
                      </div>
        </div>
        `
    }
  }
  showProduct(blogCategories);

  const filterBlog = document.querySelector('#filter');

  function showBlog() {
    const under1month = blogCategories.filter(function(item) {
        return item.time <= 1;
    })
      
      const over1month = blogCategories.filter(function(item) {
        return item.time > 1;
      })
      const over3month = blogCategories.filter(function(item) {
        return item.time > 3;
      }
      )

      const over1year = blogCategories.filter(function(item) {
        return item.time > 12;
      }
      )
      if(filterBlog.value === 'under1month'){
        showProduct(under1month);
      }
      if(filterBlog.value === 'over3month'){
        showProduct(over3month);
      }
      if(filterBlog.value === 'over1year'){
        showProduct(over1year);
      }
      if(filterBlog.value === 'all'){
        showProduct(blogCategories);
      }
      if(filterBlog.value === 'over1month'){
        showProduct(over1month);
      }
    }
filterBlog.addEventListener('change', showBlog);  
  
  