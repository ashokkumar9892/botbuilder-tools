const assert = require('assert');
const {exec} = require('child_process');
const semver = require('semver');
const path = require('path');

const chatdown = require.resolve('../bin/chatdown.js');

describe('The Chatdown cli tool', () => {
    it('should print the help contents when --help is passed as an argument', done => {
        exec(`node ${chatdown} --help`, (error, stdout, stderr) => {
            assert.equal(stderr, "", "--help should not output error message");
            assert(stdout.includes('--help') && stdout.includes('--version'));
            done();
        });
    });

    it('should print the help contents to stderr when no input is passed', done => {
        exec(`node ${chatdown}`, (error, stdout, stderr) => {
            assert.equal(stdout, "", "no parameters should not output any message");
            assert(stderr.includes('--help') && stderr.includes('--version'));
            done();
        });
    });

    it('should accept data as a pipe and output the results', done => {
        exec(`(echo user=Joe && echo bot=LuliBot && echo LuliBot: hello! && echo joe:can I get some help?) | node ${chatdown} --bot bot --user user`, (error, stdout) => {
            assert.doesNotThrow(() => JSON.parse(stdout));
            done();
        });
    });

    it('should throw when a malformed config options is encountered in the input', done => {
        exec(`echo bot=LuliBot=joe | node ${chatdown} `, (error, stdout, stderr) => {
            assert(stderr.trim() === 'Error: Malformed configurations options detected. Options must be in the format optionName=optionValue');
            done();
        });
    });

    it('should generate static based timestamps when --static is passed as an argument', done => {
        exec(`(echo user=Joe && [ConversationUpdate=MembersAdded=Joe]) | node ${chatdown} --static`, (error, stdout) => {
            assert.doesNotThrow(() => JSON.parse(stdout));
            done();
        });
    });

    it('should return version number when --version is passed as an argument', done => {
        exec(`node ${chatdown} --version`, (error, stdout) => {
            assert(semver.valid(stdout));
            done();
        });
    });

    it('should read from file when chat file is passed as an argument', done => {
        exec(`node ${chatdown} ${path.join(__dirname, 'cli.sample.chat')}`, (error, stdout) => {
            assert.doesNotThrow(() => JSON.parse(stdout));
            done();
        });
    });
});