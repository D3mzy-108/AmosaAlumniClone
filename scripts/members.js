async function getMembers() {
    const res = await fetch('../data.json')
    const data = await res.json()

    const members = [...data.members]

    members.forEach(member => {
        var card = document.createElement('div')
        card.classList.add('card', 'p-3', 'col', 'border-0', 'member-card', 'rounded-3', 'mt-3', 'position-relative')
        card.innerHTML = `
            <div class="bg-dark rounded-pill border-2 border-light text-white position-absolute px-1"
                style="top: -10px; left: -10px;">#${member.id}</div>
            <div class="d-flex align-items-center">
                <div class="d-flex align-items-center col">
                    <img src="" alt="" class="rounded-pill bg-dark" width="40px" height="40px">
                    <span class="fw-semibold ms-2">${member.name.last} ${member.name.first}</span><br>
                </div>
                <div class="d-flex align-items-center">
                <button class="btn px-2 border-0 ms-auto view" title="View" data-id="${member.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0D6EFD" height="24"
                        viewBox="0 96 960 960" width="24">
                        <path
                            d="M480.208 711.768q64.638 0 110.099-45.669 45.461-45.67 45.461-110.307 0-64.638-45.669-110.099-45.67-45.461-110.307-45.461-64.638 0-110.099 45.669-45.461 45.67-45.461 110.307 0 64.638 45.669 110.099 45.67 45.461 110.307 45.461Zm-.511-44.922q-46.312 0-78.428-32.418-32.115-32.419-32.115-78.731t32.418-78.428q32.419-32.115 78.731-32.115t78.428 32.418q32.115 32.419 32.115 78.731t-32.418 78.428q-32.419 32.115-78.731 32.115Zm.358 169.153q-137.593 0-249.823-77.038Q118.001 681.922 61.54 556q56.461-125.922 168.637-202.961 112.175-77.038 249.768-77.038 137.593 0 249.823 77.038Q841.999 430.078 898.46 556q-56.461 125.922-168.637 202.961-112.175 77.038-249.768 77.038ZM480 556Zm-.169 234.615q119.246 0 218.823-63.769Q798.23 663.077 850.461 556 798.23 448.923 698.822 385.154q-99.408-63.769-218.653-63.769-119.246 0-218.823 63.769Q161.77 448.923 108.924 556q52.846 107.077 152.254 170.846 99.408 63.769 218.653 63.769Z" />
                    </svg>
                </button>
                ${member.verified ? '<button class="btn px-2 border-0 unverify" title="Unverify" data-id="' + member.id + '"><svg xmlns="http://www.w3.org/2000/svg" fill="#DC3545" height="24" viewBox="0 96 960 960" width="24"><path d="M252.328 252.156h423.671v474.305L411.846 995.999l-25.544-19.907q-5.608-4.939-8.608-12.977-3-8.039-3-18.731v-6.923l43.076-211H119.924q-22.692 0-40.192-17.5t-17.5-40.192V602.67q0-6.361-.923-13.284-.923-6.923 1.693-13.154l119.076-276.153q8.109-20.096 28.441-34.009 20.331-13.914 41.809-13.914Zm378.288 45.384H242.847q-4.231 0-8.654 2.308-4.424 2.308-6.732 7.693L107.616 591.54v77.229q0 5.001 3.462 8.655 3.461 3.654 8.846 3.654h353.383l-49.538 240.153 206.847-214V297.54Zm0 409.691V297.54v409.691Zm45.383 19.23v-45.383H814V297.54H675.999v-45.384h183.384v474.305H675.999Z" /></svg></button>' : '<button class="btn px-2 border-0 verify" title="Verify" data-id="' + member.id + '"><svg xmlns="http://www.w3.org/2000/svg" fill="rgb(25,135,84)" height="24" viewBox="0 96 960 960" width="24"><path d="M706.384 915.999H282.77V441.694l263.768-269.538 25.882 19.907q5.656 4.939 8.656 12.977 3 8.039 3 18.346v7.308l-43.462 211h298.231q22.692 0 40.192 17.5t17.5 40.192v66.099q0 6.361.731 13.284.731 6.923-1.885 13.154L776.691 868.076q-8.629 20.16-28.893 34.041-20.263 13.882-41.414 13.882Zm-378.23-45.384h387.768q3.847 0 8.462-2.308 4.616-2.308 6.924-7.693l119.846-283.999v-77.229q0-5.001-3.655-8.655-3.654-3.654-8.654-3.654H485.462l49.153-240.153-206.461 214v409.691Zm0-409.691V870.615 460.924Zm-45.384-19.23v45.383h-138v383.538h138v45.384H99.386V441.694H282.77Z" /></svg></button>'}
                </div>

            </div>
        `

        document.getElementById('members-list').appendChild(card)
    })

    document.getElementById('initials').textContent = ""
    document.getElementById('firstname').textContent = "..."
    document.getElementById('lastname').textContent = "..."
    document.getElementById('middlename').textContent = "..."
    document.getElementById('email').textContent = "..."
    document.getElementById('phone').textContent = "..."
    document.getElementById('status').textContent = "..."

    // VIEW DETAILS
    var view_btns = document.querySelectorAll(".view")

    view_btns.forEach(btn => {
        btn.addEventListener('click', () => {

            // Toggle Side Details
            if (window.screen.width < 993) {
                document.querySelector(".side_details").classList.add('active')

                document.querySelector('.back').addEventListener('click', () => {
                    document.querySelector(".side_details").classList.remove('active')
                })
            }

            // Fetch Data
            var selected = members.find(info => info.id == parseInt(btn.getAttribute('data-id')))
            document.getElementById('initials').textContent = selected.name.first.charAt(0) + selected.name.last.charAt(0)
            document.getElementById('firstname').textContent = selected.name.first
            document.getElementById('lastname').textContent = selected.name.last
            document.getElementById('middlename').textContent = selected.name.middle
            document.getElementById('email').textContent = selected.email
            document.getElementById('phone').textContent = selected.phone
            document.getElementById('status').textContent = selected.verified ? 'Verified' : 'Awaiting Verification'

        })
    })

    // VERIFY USER
    var verify_btns = document.querySelectorAll(".verify")

    verify_btns.forEach(btn => {
        btn.addEventListener('click', async () => {
            var selected = members.find(info => info.id == parseInt(btn.getAttribute('data-id')))
            confirm(`Are you sure you want to verify "${selected.name.last} ${selected.name.first} ${selected.name.middle}"?`)
        })
    })

    // UNVERIFY USER
    var unverify_btns = document.querySelectorAll(".unverify")

    unverify_btns.forEach(btn => {
        btn.addEventListener('click', async () => {
            var selected = members.find(info => info.id == parseInt(btn.getAttribute('data-id')))
            confirm(`Are you sure you want to unverify "${selected.name.last} ${selected.name.first} ${selected.name.middle}"?`)
        })
    })
}


getMembers()