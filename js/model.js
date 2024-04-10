const model = {
    app: {
        currentPage: null,
        currentUser: null,
        darkMode: false,
    },
    inputs: {
        loginPage: {
            usernameInput: null,
            passwordInput: null,
            registerNewUser: {
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
            changeEmailInput: null,
            changePhoneNrInput: null,
            changePasswordInput: null,
            changePasswordReInput: null,
            locationInput: null, /*kart? tekst? */
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
                likes: [2],
            },
            {
                id: 2,
                userPassword: '123',
                uploadedImgs: [],
                displayName: 'Turbo',
                displayAge: '',
                displayBio: '',
                profilePictureIndex: 0,
                displayedImgs: [],
                visibility: true,
                email: 'thingything@this.com',
                phone: '',
                activeFilters: {
                    genderSelected: 'all',
                    breedSelected: 'all',
                    ageRangeSelected: 'all'
                },
                likes: [1],
            },
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