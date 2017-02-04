'use strict';

// Usage
// <div id="app"></div>
// var app = new GridGitHubJS('app');

class GridGitHubJS {
    constructor(rootElId) {
        this.template = `
            <div class="gridsterContainer">
                <div class="stats">
                    <div class="total">Total items: <span id="rowCount"></span></div>
                    <div class="pager">
                        <button id="pagePrev">Prev</button>
                        <span>
                            <span id="curPageNum"></span>/<span id="maxPageNum"></span>
                        </span>
                        <button id="pageNext">Next</button>
                    </div>
                </div>
                <table class="gridster">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Owner</th>
                            <th>Url</th>
                            <th>Description</th>
                            <th>Stars</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody id="gridsterTableBody"></tbody>                           
                </table>
            </div>
            <div id="gridsterDetailPopup" class="gridsterDetailPopup">
                <div class="body"></div>
                <div class="fog"></div>
            </div>         
        `;

        // Add template to dom
        document.getElementById(rootElId).innerHTML = this.template;

        // Init
        this.tableBody = document.getElementById('gridsterTableBody');
        this.popupEl = document.getElementById('gridsterDetailPopup');
        this.popupBody = this.popupEl.querySelector('.body');
        this.rowCountEl = document.getElementById('rowCount');
        this.curPageNumEl = document.getElementById('curPageNum');
        this.maxPageNumEl = document.getElementById('maxPageNum');


        // Private data
        this.data = {};
        this.curPageNum = 1;
        this.itemsPerGage = 20;
        this.rowCount = 0;
        this.url = 'https://api.github.com/search/repositories?q=map+language:javascript&sort=stars&order=desc';
        
        var self = this;

        // Fetch data
        this.fetchData(self);
        
        // Add button click event listener to tablebody for show popup
        this.tableBody.addEventListener('click', (e)=>{
            self.tableBodyClickHandler(e, self);
        }, false);

        // Add Close popup event listener
        this.popupEl.querySelector('.fog').addEventListener('click', ()=>{
            self.hideDetailPopup();
        }, false);

        // Pagination
        document.getElementById('pageNext').addEventListener('click', (e)=>{
            self.nextPage(self);
        }, false);
        document.getElementById('pagePrev').addEventListener('click', (e)=>{
            self.prevPage(self);
        }, false);

    }

    fillTable(data) {
        let tableRowAll = '',
            tableBodyTemplate = '';
        const itemsLen = data.items.length;

        for (let i=0; i < itemsLen; i++) {
            let item = data.items[i];
            tableBodyTemplate = `<tr>
                <td>${ item.name }</td>
                <td>${ item.owner.login }</td>
                <td><a href="${ item.html_url }" target="_blank" title="${ item.html_url }">URL</a></td>
                <td>${ item.description }</td>
                <td>${ item.stargazers_count }</td>
                <td><button class="showDetailPopup" data-idx="${i}">Detail</button></td>
                </tr>
            `;
            tableRowAll += tableBodyTemplate;
        }

        this.tableBody.innerHTML = tableRowAll;
    }

    fetchData(self) {
        let query = self.url+'&page='+self.curPageNum;

        let xhr = new XMLHttpRequest();
        xhr.addEventListener("error", (e)=>{
            console.log(e);
        }, false);
        xhr.addEventListener("load", ()=>{
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                self.data = data;
                self.rowCount = data.total_count;
                self.fillTable(data);
                self.updateStats(self);
            } else {
                console.log(xhr.status, xhr.responseText);
            }            
        }, false);
        xhr.open("GET", query, true);
        xhr.send();

    }

    tableBodyClickHandler(e, self) {
        if (e.target.className === 'showDetailPopup') {        
            const idx = e.target.getAttribute('data-idx');
            let itemData= JSON.stringify(self.data.items[idx], null, '<br>');
            self.popupBody.innerHTML = itemData;
            // self.popupBody.textContent = itemData;
            self.showDetailPopup();
        }
    }

    showDetailPopup() {
        this.popupEl.classList.add('show');
    }
    hideDetailPopup() {
        this.popupEl.classList.remove('show');
    }

    updateStats(self) {
        self.rowCountEl.textContent = self.rowCount;
        self.curPageNumEl.textContent = self.curPageNum;
        self.maxPageNumEl.textContent = self.rowCount / self.itemsPerGage;
    }

    prevPage(self) {
        if (self.curPageNum <= 1) return false;
        self.curPageNum--;
        self.fetchData(self);
    }
    nextPage(self) {
        if (self.curPageNum >= self.maxPageNum) return false;
        self.curPageNum++;
        self.fetchData(self);
    }


}