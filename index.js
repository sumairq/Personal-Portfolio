const ICON = document.querySelector('#icon');
const LOGO = document.querySelector('#logo');
const COLLAPSE = document.querySelector('#collapse');
const LIST_ITEM = document.querySelectorAll('#collapse li');

ICON.addEventListener('click', () => {
  COLLAPSE.classList.toggle('collapse');
  ICON.classList.add('collapse');
  LOGO.classList.add('collapse');
});

LIST_ITEM.forEach((li) => {
  li.addEventListener('click', () => {
    COLLAPSE.classList.toggle('collapse');
    ICON.classList.remove('collapse');
    LOGO.classList.remove('collapse');
  });
});

const PROJECT_SECTION = document.querySelector('#project_section');

const projects = [
  {
    image: './assets/images/img-placeholder.png',
    alternative: 'Placeholder',
    title: 'Multi-Post Stories',
    titleSpan: ' Gain + Glory',
    href: '#',
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    webButton: 'See Project',
    popupImgMobile: './assets/images/popup/mobile-img.png',
    popupBtnClose: './assets/images/popup/close-btn.png',
    popupTitle: 'Keeping track of hundreds of components',
    popupText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    popupLngMobile: ['Ruby on rails', 'CSS', 'JavaScript'],
    popupLinks: ['See Live', 'See Source'],
    popupImgDesktop: './assets/images/popup/mobile-img.png',
    popupBtnCloseDesktop: './assets/images/popup/close-btn-desktop.png',
    popupLngDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    image: './assets/images/img-placeholder.png',
    alternative: 'Placeholder',
    title: 'Multi-Post Stories',
    titleSpan: ' Gain + Glory',
    href: '#',
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    webButton: 'See Project',
    popupImgMobile: './assets/images/popup/mobile-img.png',
    popupBtnClose: './assets/images/popup/close-btn.png',
    popupTitle: 'Keeping track of hundreds of components',
    popupText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    popupLngMobile: ['Ruby on rails', 'CSS', 'JavaScript'],
    popupLinks: ['See Live', 'See Source'],
    popupImgDesktop: './assets/images/popup/mobile-img.png',
    popupBtnCloseDesktop: './assets/images/popup/close-btn-desktop.png',
    popupLngDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    image: './assets/images/img-placeholder.png',
    alternative: 'Placeholder',
    title: 'Multi-Post Stories',
    titleSpan: ' Gain + Glory',
    href: '#',
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    webButton: 'See Project',
    popupImgMobile: './assets/images/popup/mobile-img.png',
    popupBtnClose: './assets/images/popup/close-btn.png',
    popupTitle: 'Keeping track of hundreds of components',
    popupText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    popupLngMobile: ['Ruby on rails', 'CSS', 'JavaScript'],
    popupLinks: ['See Live', 'See Source'],
    popupImgDesktop: './assets/images/popup/mobile-img.png',
    popupBtnCloseDesktop: './assets/images/popup/close-btn-desktop.png',
    popupLngDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    image: './assets/images/img-placeholder.png',
    alternative: 'Placeholder',
    title: 'Multi-Post Stories',
    titleSpan: ' Gain + Glory',
    href: '#',
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    webButton: 'See Project',
    popupImgMobile: './assets/images/popup/mobile-img.png',
    popupBtnClose: './assets/images/popup/close-btn.png',
    popupTitle: 'Keeping track of hundreds of components',
    popupText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    popupLngMobile: ['Ruby on rails', 'CSS', 'JavaScript'],
    popupLinks: ['See Live', 'See Source'],
    popupImgDesktop: './assets/images/popup/mobile-img.png',
    popupBtnCloseDesktop: './assets/images/popup/close-btn-desktop.png',
    popupLngDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    image: './assets/images/img-placeholder.png',
    alternative: 'Placeholder',
    title: 'Multi-Post Stories',
    titleSpan: ' Gain + Glory',
    href: '#',
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    webButton: 'See Project',
    popupImgMobile: './assets/images/popup/mobile-img.png',
    popupBtnClose: './assets/images/popup/close-btn.png',
    popupTitle: 'Keeping track of hundreds of components',
    popupText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    popupLngMobile: ['Ruby on rails', 'CSS', 'JavaScript'],
    popupLinks: ['See Live', 'See Source'],
    popupImgDesktop: './assets/images/popup/mobile-img.png',
    popupBtnCloseDesktop: './assets/images/popup/close-btn-desktop.png',
    popupLngDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    image: './assets/images/img-placeholder.png',
    alternative: 'Placeholder',
    title: 'Multi-Post Stories',
    titleSpan: ' Gain + Glory',
    href: '#',
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    webButton: 'See Project',
    popupImgMobile: './assets/images/popup/mobile-img.png',
    popupBtnClose: './assets/images/popup/close-btn.png',
    popupTitle: 'Keeping track of hundreds of components',
    popupText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    popupLngMobile: ['Ruby on rails', 'CSS', 'JavaScript'],
    popupLinks: ['See Live', 'See Source'],
    popupImgDesktop: './assets/images/popup/mobile-img.png',
    popupBtnCloseDesktop: './assets/images/popup/close-btn-desktop.png',
    popupLngDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  },

];
// for creation of elements required
for (let i = 0; i < 6; i += 1) {
  const EACH_PROJECT = document.createElement('div');
  EACH_PROJECT.classList.add('flex_container_primary');

  const img = document.createElement('img');
  img.src = projects[i].image;
  img.alt = projects[i].alternative;
  img.classList.add('placehold');

  const h3 = document.createElement('h3');
  h3.innerHTML = projects[i].title;

  const breakLine = document.createElement('br');

  const h3Span = document.createElement('span');
  h3Span.innerHTML = projects[i].titleSpan;

  const unorderedList = document.createElement('ul');

  const listedItem1 = document.createElement('li');
  listedItem1.innerHTML = [projects[i].languages[0]];

  const listedItem2 = document.createElement('li');
  listedItem2.innerHTML = [projects[i].languages[1]];

  const listedItem3 = document.createElement('li');
  listedItem3.innerHTML = [projects[i].languages[2]];

  const listedItem4 = document.createElement('li');
  listedItem4.innerHTML = [projects[i].languages[3]];

  const button = document.createElement('a');
  button.classList.add('web_button', 'center_button');
  button.href = projects[i].href;
  button.innerHTML = projects[i].webButton;
  button.id = 'button-link';

  unorderedList.appendChild(listedItem1);
  unorderedList.appendChild(listedItem2);
  unorderedList.appendChild(listedItem3);
  unorderedList.appendChild(listedItem4);
  h3.appendChild(breakLine);
  h3.appendChild(h3Span);
  EACH_PROJECT.appendChild(img);
  EACH_PROJECT.appendChild(h3);
  EACH_PROJECT.appendChild(unorderedList);
  EACH_PROJECT.appendChild(button);
  PROJECT_SECTION.appendChild(EACH_PROJECT);
}

for (let i = 1; i < 2; i += 1) {
  const BUTTON_LINK = document.querySelectorAll('#button-link');
  const POPUP_CONTAINER = document.querySelector('#popup_container');

  const popup = document.createElement('div');
  popup.id = 'popup';
  popup.classList.add('popup');

  const popupImgMobile = document.createElement('img');
  popupImgMobile.src = projects[0].popupImgMobile;
  popupImgMobile.alt = 'Image for mobile popup';
  popupImgMobile.classList.add('popup_img');

  const popupImgDesktop = document.createElement('img');
  popupImgDesktop.src = projects[0].popupImgDesktop;
  popupImgDesktop.alt = 'Image for desktop popup';
  popupImgDesktop.classList.add('popup_img2');

  const popupBtnClose = document.createElement('img');
  popupBtnClose.src = projects[0].popupBtnClose;
  popupBtnClose.classList.add('close_mobile');
  popupBtnClose.id = 'close';
  popupBtnClose.alt = 'Close button for popup';
  popupBtnClose.querySelector('#close');

  const popupBtnCloseDesktop = document.createElement('img');
  popupBtnCloseDesktop.src = projects[0].popupBtnCloseDesktop;
  popupBtnCloseDesktop.classList.add('close_desktop');
  popupBtnCloseDesktop.id = 'close';
  popupBtnCloseDesktop.alt = 'Close button for popup';
  popupBtnCloseDesktop.querySelector('#close');

  const popupBody = document.createElement('div');
  popupBody.classList.add('popup_body');

  const popupTitle = document.createElement('h2');
  popupTitle.innerHTML = projects[0].popupTitle;
  popupTitle.classList.add('popup_h2');

  const popupTitleDesktop = document.createElement('h2');
  popupTitleDesktop.innerHTML = projects[0].popupTitle;

  const popupList = document.createElement('ul');
  popupList.classList.add('ul_mobile');

  const popupListItem1 = document.createElement('li');
  popupListItem1.innerHTML = [projects[0].popupLngMobile[0]];

  const popupListItem2 = document.createElement('li');
  popupListItem2.innerHTML = [projects[0].popupLngMobile[1]];

  const popupListItem3 = document.createElement('li');
  popupListItem3.innerHTML = [projects[0].popupLngMobile[2]];

  const popupText = document.createElement('p');
  popupText.innerHTML = projects[0].popupText;

  const popupFooter = document.createElement('div');
  popupFooter.classList.add('popup_footer');

  const popupHeader = document.createElement('div');
  popupHeader.classList.add('popup_header');

  const seeLiveBtn = document.createElement('a');
  seeLiveBtn.innerHTML = [projects[0].popupLinks[0]];
  seeLiveBtn.href = '#';
  seeLiveBtn.classList.add('web_button');

  const btnLiveIcon = document.createElement('img');
  btnLiveIcon.src = './assets/images/popup/live-icon.png';
  btnLiveIcon.alt = 'Live Icon for Button';
  seeLiveBtn.appendChild(btnLiveIcon);

  const seeSourceBtn = document.createElement('a');
  seeSourceBtn.innerHTML = [projects[0].popupLinks[1]];
  seeSourceBtn.href = '#';
  seeSourceBtn.classList.add('web_button');

  const btnGitHubIcon = document.createElement('img');
  btnGitHubIcon.src = './assets/images/popup/github-icon.png';
  btnGitHubIcon.alt = 'GitHub Icon for Button';
  seeSourceBtn.appendChild(btnGitHubIcon);

  const seeLiveBtnDesktop = document.createElement('a');
  seeLiveBtnDesktop.innerHTML = [projects[0].popupLinks[0]];
  seeLiveBtnDesktop.href = '#';
  seeLiveBtnDesktop.classList.add('web_button');

  const btnLiveIconDesktop = document.createElement('img');
  btnLiveIconDesktop.src = './assets/images/popup/live-icon.png';
  btnLiveIconDesktop.alt = 'Live Icon for Button';
  seeLiveBtnDesktop.appendChild(btnLiveIconDesktop);

  const seeSourceBtnDesktop = document.createElement('a');
  seeSourceBtnDesktop.innerHTML = [projects[0].popupLinks[1]];
  seeSourceBtnDesktop.href = '#';
  seeSourceBtnDesktop.classList.add('web_button');

  const btnGitHubIconDesktop = document.createElement('img');
  btnGitHubIconDesktop.src = './assets/images/popup/github-icon.png';
  btnGitHubIconDesktop.alt = 'GitHub Icon for Button';
  seeSourceBtnDesktop.appendChild(btnGitHubIconDesktop);

  popupList.appendChild(popupListItem1);
  popupList.appendChild(popupListItem2);
  popupList.appendChild(popupListItem3);

  popupFooter.appendChild(seeLiveBtn);
  popupFooter.appendChild(seeSourceBtn);

  const breakLine = document.createElement('br');
  popupTitleDesktop.appendChild(breakLine);

  seeSourceBtnDesktop.appendChild(btnGitHubIconDesktop);
  seeLiveBtnDesktop.appendChild(btnLiveIconDesktop);
  popupHeader.appendChild(popupTitleDesktop);
  popupHeader.appendChild(seeLiveBtnDesktop);
  popupHeader.appendChild(seeSourceBtnDesktop);

  popupBody.appendChild(popupList);
  popupBody.appendChild(popupText);
  popupBody.appendChild(popupTitle);
  popupBody.appendChild(popupBtnCloseDesktop);
  popupBody.appendChild(popupBtnClose);
  popupBody.appendChild(popupImgDesktop);
  popupBody.appendChild(popupImgMobile);
  popupBody.appendChild(popupHeader);
  popup.appendChild(popupBody);
  popup.appendChild(popupFooter);

  BUTTON_LINK.forEach((btn) => {
    btn.addEventListener('click', () => {
      POPUP_CONTAINER.appendChild(popup);
      POPUP_CONTAINER.classList.remove('collapse');
    });
  });

  popupBtnClose.addEventListener('click', () => {
    POPUP_CONTAINER.classList.add('collapse');
  });

  popupBtnCloseDesktop.addEventListener('click', () => {
    POPUP_CONTAINER.classList.add('collapse');
  });

  const popupListDesktop = document.createElement('ul');
  popupListDesktop.classList.add('ul_desktop');

  const popupListItem1Desktop = document.createElement('li');
  popupListItem1Desktop.innerHTML = [projects[0].popupLngDesktop[0]];

  const popupListItem2Desktop = document.createElement('li');
  popupListItem2Desktop.innerHTML = [projects[0].popupLngDesktop[1]];

  const popupListItem3Desktop = document.createElement('li');
  popupListItem3Desktop.innerHTML = [projects[0].popupLngDesktop[2]];

  const popupListItem4Desktop = document.createElement('li');
  popupListItem4Desktop.innerHTML = [projects[0].popupLngDesktop[3]];

  const popupListItem5Desktop = document.createElement('li');
  popupListItem5Desktop.innerHTML = [projects[0].popupLngDesktop[4]];

  const popupListItem6Desktop = document.createElement('li');
  popupListItem6Desktop.innerHTML = [projects[0].popupLngDesktop[5]];

  popupListDesktop.appendChild(popupListItem1Desktop);
  popupListDesktop.appendChild(popupListItem2Desktop);
  popupListDesktop.appendChild(popupListItem3Desktop);
  popupListDesktop.appendChild(popupListItem4Desktop);
  popupListDesktop.appendChild(popupListItem5Desktop);
  popupListDesktop.appendChild(popupListItem6Desktop);

  popupBody.appendChild(popupListDesktop);
}
