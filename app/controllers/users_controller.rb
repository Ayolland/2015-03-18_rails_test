class UsersController < ApplicationController
  
  def index
    @users = User.all
    binding.pry
    render "index"
  end
  
  def new
    @user = User.new
    render "new"
  end
  
  def create
    @user = User.new(params[:duck])
    if @user.save
      render "view"
    else
      render "new"
    end
  end
  
  def edit
    @user = User.find(params[:id])
    render "edit"
  end
  
end