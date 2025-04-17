    function  Nt_alert(options={}){
        this.opt = Object.assign({
            type:'',
            message:''
        },options)
        this.build = function(){
            this._screen = document.createDocumentFragment();
            this._notification = document.createElement('div');
            this._notification.classList.add("notification");
            this._screen.append(this._notification);
            document.body.append(this._screen)
            if(this.opt.type.trim().toLowerCase() === "error")
            {
                this.error();
            }
            if(this.opt.type.trim().toLowerCase()==="warning")
            {
                this.warning();
            }
            if(this.opt.type.trim().toLowerCase()==="success")
            {
                this.success();
            }
        }
        this.close = function(){
                this._notification.remove();
        }
        this.error = function(){
            this._error = document.createElement("div");
            this._error.classList.add("notification-error",'size-full')
            if(this.opt.type.toLowerCase() === 'error'.toLowerCase())
            {
                this._wrapright =  document.createElement("div");
                this._wrapleft = document.createElement("div");
                this._wrapright.classList.add('notfication__wrapright');
                this._wrapleft.classList.add('notfication__wrapleft');
                this._wrapleft.innerHTML = `<span class="notification__icon">
                    <i class="fa-solid fa-xmark" ></i>
                </span>`
                this.content = document.createElement("p");
                this.content.classList.add('notification__content')
                this.content.innerText = this.opt.message;
                this._wrapright.append(this.content)
                this._error.append(this._wrapleft,this._wrapright)  
                this._notification.append(this._error);
                this._notification.addEventListener('transitionend',(e)=>{
                })
                setTimeout(() => {
                    
                    this._notification.classList.add("show");
                    this.close();
                },5000);

            }
            return this;
        }

        this.warning = function(){
            this._warning = document.createElement("div");
            this._warning.classList.add("notification-warning",'size-full')
            if(this.opt.type.toLowerCase() === 'warning'.toLowerCase())
            {
                this._wrapright =  document.createElement("div");
                this._wrapleft = document.createElement("div");
                this._wrapright.classList.add('notfication__wrapright');
                this._wrapleft.classList.add('notfication__wrapleft');
                this._wrapleft.innerHTML = `<span class="notification__icon">
                <i class="fa-solid fa-exclamation"></i>
                </span>`
                this.content = document.createElement("p");
                this.content.classList.add('notification__content')
                this.content.innerText = this.opt.message;
                this._wrapright.append(this.content)
                this._warning.append(this._wrapleft,this._wrapright)  
                this._notification.append(this._warning);
                this._notification.addEventListener('transitionend',(e)=>{
                })
                setTimeout(() => {
                    
                    this._notification.classList.add("show");
                    this.close();
                },5000);

            }
            return this;
        }
        this.success = function(){
            this._success = document.createElement("div");
            this._success.classList.add("notification-success",'size-full')
            if(this.opt.type.toLowerCase() === 'success'.toLowerCase())
            {
                this._wrapright =  document.createElement("div");
                this._wrapleft = document.createElement("div");
                this._wrapright.classList.add('notfication__wrapright');
                this._wrapleft.classList.add('notfication__wrapleft');
                this._wrapleft.innerHTML = `<span class="notification__icon">
                <i class="fa-solid fa-check"></i>
                </span>`
                this.content = document.createElement("p");
                this.content.classList.add('notification__content')
                this.content.innerText = this.opt.message;
                this._wrapright.append(this.content)
                this._success.append(this._wrapleft,this._wrapright)  
                this._notification.append(this._success);
                this._notification.addEventListener('transitionend',(e)=>{
                })
                setTimeout(() => {
                    
                    this._notification.classList.add("show");
                    this.close();
                },5000);

            }
            return this;
        }
    }



