module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Para arquivos CSS
        "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$": "<rootDir>/.jest/mocks/fileMock.js", // Para arquivos de mídia
    },
};
