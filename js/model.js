const model = {
    app: {
        currentPage: 'settings', //'homepage',' 'settings', null (login)
        currentUserId: null,
        darkMode: false,
    },
    inputs: {
        loginPage: {
            usernameInput: null,
            passwordInput: null,
            registerNewUser: {
                isActive: false,
                newUserNameInput: null,
                newEmailInput: null,
                newPhoneNrInput: null,
                newPasswordInput: null,
                newPasswordReInput: null,
            }
        },
        mainPage: {
            previousUserId: null,
            currentProfileIndex: 0,
        },
        chatPage: {
            content: null,
            selectedUser: null,
        },
        profilePage: {
            insertNameInput: null,
            insertAgeInput: null,
            insertBioInput: null,
        },
        activityPage: {
            createNewActivity: {
                startDateInput: null,
                endDateInput: null,
                locationInput: null,
            },
            selctedActivity: null,
        },
        settingPage: {
            isChanging: null, //null, 'phone', 'email', 'password'
            changeEmailInput: null,
            changePhoneNrInput: null,
            changePasswordInput: null,
            changePasswordReInput: null,
            changingErrorMessage: null,
            locationInput: null, // kart/tekst (usikker på hvordan vi skal gjøre dette )
            minDistance: null,
            maxDistance: null,
            visibilityInput: null,
            filterInputs: {
                gender: null,
                breed: null,
                ageRange: null,
            }
        }
    },




    data: {
        registeredUsers: [
            {
                id: 1,
                userPassword: '123',
                uploadedImgs: ['img/protosImg1.jpg'],
                displayName: 'Protos',
                displayAge: '4',
                displayBio: 'Svart demon',
                profilePictureIndex: 0,
                displayedImgs: [],
                visibility: true,
                email: 'something@this.com',
                phone: '133 71 337',
                activeFilters: {
                    genderSelected: 'all',
                    breedSelected: 'all',
                    ageRangeSelected: 'all'
                },
                likes: [],
                dislikes: [],
            },
            {
                id: 2,
                userPassword: 'safePassword',
                uploadedImgs: ['img/turboImg1.jpg', 'img/turboImg2.jpg'],
                displayName: 'Turbo',
                displayAge: '3',
                displayBio: 'Rask som vinden',
                profilePictureIndex: 1,
                displayedImgs: ['img/turboImg2.jpg'],
                visibility: true,
                email: 'fastest@this.com',
                phone: '999 88 777',
                activeFilters: {
                  genderSelected: 'all',
                  breedSelected: 'all',
                  ageRangeSelected: '2-5'
                },
                likes: [1, 3],
                dislikes: [],
            },
            {
                id: 3,
                userPassword: 'anotherPass',
                uploadedImgs: ['img/shadowImg1.jpeg'],
                displayName: 'Shadow',
                displayAge: '5',
                displayBio: 'Stille, men dødelig',
                profilePictureIndex: 0,
                displayedImgs: [],
                visibility: true,
                email: 'quiet@this.com',
                phone: '123 45 678',
                activeFilters: {
                  genderSelected: 'all',
                  breedSelected: 'all',
                  ageRangeSelected: '4-6'
                },
                likes: [1],
                dislikes: [],
            },
            {
                id: 4,
                userPassword: 'password123',
                uploadedImgs: ['img/blazeImg1.jpg'],
                displayName: 'Blaze',
                displayAge: '2',
                displayBio: 'Brennende ånd, myk pels',
                profilePictureIndex: 0,
                displayedImgs: ['img/blazeImg1.jpg'],
                visibility: true,
                email: 'firestarter@this.com',
                phone: '654 32 198',
                activeFilters: {
                  genderSelected: 'all',
                  breedSelected: 'all',
                  ageRangeSelected: '1-3'
                },
                likes: [2, 3],
                dislikes: [],
            },
            {
                id: 5,
                userPassword: '123passord',
                uploadedImgs: ['img/MunchieImg1.png'],
                displayName: 'Muncie',
                displayAge: '5',
                displayBio: 'Gress! nam, nam!',
                profilePictureIndex: 0,
                displayedImgs: ['img/MuncieImg1.png'],
                visibility: true,
                email: 'muncie@this.com',
                phone: null,
                activeFilters: {
                  genderSelected: 'all',
                  breedSelected: 'all',
                  ageRangeSelected: 'all'
                },
                likes: [1],
                dislikes: [],
            },
            {
                id: 6,
                userPassword: 'password123',
                uploadedImgs: ['img/OliverImg1.jpg', 'img/OliverImg2.jpg', 'img/OliverImg3.jpg'],
                displayName: 'Oliver',
                displayAge: '12',
                displayBio: 'Sjarmtroll',
                breed: 'British Shorthair',
                sterilized: true,
                profilePictureIndex: 0,
                displayedImgs: ['img/OliverImg1.jpg'],
                visibility: true,
                email: 'oliver@this.com',
                phone: null,
                activeFilters: {
                  genderSelected: 'all',
                  breedSelected: 'all',
                  ageRangeSelected: 'all'
                },
                likes: [],
                dislikes: [],
            },
            {
                id: 7,
                userPassword: 'password123',
                uploadedImgs: ['img/FridtjofImg1.jpg', 'img/FridtjofImg2.jpg'],
                displayName: 'Fridtjof Myrull',
                displayAge: '5',
                displayBio: 'La meg sove da!!',
                breed: 'Hellig Birma',
                sterilized: true,
                profilePictureIndex: 1,
                displayedImgs: ['img/FridtjofImg2.jpg'],
                visibility: true,
                email: 'fridtjof@this.com',
                phone: null,
                activeFilters: {
                  genderSelected: 'all',
                  breedSelected: 'all',
                  ageRangeSelected: '1-3'
                },
                likes: [],
                dislikes: [],
            }
        ],

        matches: [
            [1, 2]
        ],

        activities: [
            {
                hostId: 1,
                participantsIds: [1, 2],
                date: '2024-04-08T11:02:46',
                location: '',
            },

        ],

        chatLogs: [
            {
                participants: [1, 2],
                messages: [
                    {
                        senderId: 1,
                        content: 'blablabla',
                        timestamp: '2024-04-08T11:02:46',
                    }
                ]
            },
            {
                participants: [1, 3],
                messages: [
                    {
                        senderId: 1,
                        content: 'blablabla',
                        timestamp: '2024-04-08T11:02:46',
                    }
                ]
            }
        ]
    }
}