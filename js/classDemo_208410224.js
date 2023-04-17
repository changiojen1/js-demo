let showClassDemo = week => {
    const demoSection = document.querySelector('.banner-section')
    switch(week){
        case 'w1':
            demoSection.innerHTML = `<iframe src = '../demo/w01/index.html' width="100%" height="100%"/>`
            break;
        case 'w1-md':
            demoSection.innerHTML = `<iframe src = '../demo/md/w01/w01_208410224.html' width="100%" height="100%"/>`
            break;            
        case 'w2':
            demoSection.innerHTML = `<iframe src = '../demo/w02-tictactoe/tictactoe_208410224.html' width="100%" height="100%"/>`
            break;
        case 'w2-md':
            demoSection.innerHTML = `<iframe src = '../demo/md/w02/w02_208410224.html' width="100%" height="100%"/>`
            break;            
        case 'w3':
            demoSection.innerHTML = `<iframe src = '../demo/w03-review/index.html' width="100%" height="100%"/>`
            break;
        case 'w3-md':
            demoSection.innerHTML = `<iframe src = '../demo/md/w03/w03_208410224.html' width="100%" height="100%"/>`
            break;            
        case 'w4':
            demoSection.innerHTML = `<iframe src = '../demo/w04-menu/index.html' width="100%" height="100%"/>`
            break;
        case 'w4-md':
            demoSection.innerHTML = `<iframe src = '../demo/md/w04/w04_208410224.html' width="100%" height="100%"/>`
            break;            
        case 'w5-menu':
            demoSection.innerHTML = `<iframe src = '../demo/w05/menu/index.html' width="100%" height="100%"/>`
            break;            
        case 'w5-modal':
            demoSection.innerHTML = `<iframe src = '../demo/w05/modal/index.html' width="100%" height="100%"/>`
            break;
        case 'w5-md':
            demoSection.innerHTML = `<iframe src = '../demo/md/w05/w05_208410224.html' width="100%" height="100%"/>`
            break;            
        case 'w6':
            demoSection.innerHTML = `<iframe src = '../demo/w06-array/p3_208410224/p3_208410224.html' width="100%" height="100%"/>`
            break;
        case 'w6-md':
            demoSection.innerHTML = `<iframe src = '../demo/md/w06/w06_208410224.html' width="100%" height="100%"/>`
            break;
        case 'w9-p1':
            demoSection.innerHTML = `<iframe src = '../demo/w09-midprep/p1_bmi_208410224/p1_208410224.html' width="100%" height="100%"/>`
            break;
        case 'w9-p2':
            demoSection.innerHTML = `<iframe src = '../demo/w09-midprep/p2_counter_208410224/index.html' width="100%" height="100%"/>`
            break;
        case 'w9-p3':
            demoSection.innerHTML = `<iframe src = '../demo/w09-midprep/p3_tour_208410224/index.html' width="100%" height="100%"/>`
            break;
        case 'w9-md':
            demoSection.innerHTML = `<iframe src = '../demo/md/w09/w09_208410224.html' width="100%" height="100%"/>`
            break;                                                               
    }
}