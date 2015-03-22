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
    @duck = Duck.find(params[:duck][:id])
    @duck.assign_attributes(params[:duck])
    if @duck.save
      render "view"
    else
      render "edit"
    end
  end
  
  def like
    @duck = Duck.find(params[:duck][:id])
    binding.pry
    Like.create(params[:duck])
    render "view"
  end
  
  def destroy
    @duck = Duck.find(params[:duck][:id])
    @duck.destroy
    redirect_to "/"
  end
  
end
