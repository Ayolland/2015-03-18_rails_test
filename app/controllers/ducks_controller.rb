class DucksController < ApplicationController
  
  def index
    @ducks = Duck.all
    render "index"
  end
  
  def new
    @duck = Duck.new
    render "new"
  end
  
  def create
    @duck = Duck.new(params[:duck])
    if @duck.save
      render "view"
    else
      render "new"
    end
  end
  
  def show
    @duck = Duck.find(params[:id])
    render "view"
  end
  
  def edit
    @duck = Duck.find(params[:id])
    render "edit"
  end
  
  def update
    @duck = Duck.find(params[:id])
    @duck.assign_attributes(params)
    if @duck.save
      render "view"
    else
      render "edit"
    end
  end
  
  def destroy
    @duck = Duck.find(params[:id])
    @duck.destroy
    redirect to "/"
  end
  
end
