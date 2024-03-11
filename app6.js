const getStudentFullName = (id) => {
    switch (id) {
        case 0:
            return "Jakub Izydorczyk";
        case 1:
            return "Kacper Nowaki";
        case 2:
            return "Maja Kowalska";
        default:
            return "Michał Wiśniewski";
    }
};

const getStudentId = (id) => {
    switch (id) {
        case 0:
            return "42881";
        case 1:
            return "111222";
        case 2:
            return "222333";
        default:
            return "333444";
    }
};