function checkedSubject() {
    const divs = document.querySelectorAll('div[style="margin-left:35px; margin-bottom:10px;"]');

    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];
                // สุ่มเลือก value ระหว่าง 3 ถึง 5
        const randomValue = Math.floor(Math.random() * (3)) + 3;
                // เลือก input ที่มีค่า value ตรงกับที่สุ่มได้
        const randomChoice = div.querySelector(input[type="radio"][value="${randomValue}"]);
        if (randomChoice) {
            randomChoice.checked = true; // ติ๊กตัวเลือกที่สุ่มได้
        }
    }
}

export { checkedSubject };