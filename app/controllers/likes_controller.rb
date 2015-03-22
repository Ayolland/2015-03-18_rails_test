class LikesController < ApplicationController
  
  def create
    @like = Like.new(params[:like])
    binding.pry
    if @like.save
      redirect "/ducks/#{params[:like][:duck_id]}"
    else
      redirect "/"
    end
  end
  
end