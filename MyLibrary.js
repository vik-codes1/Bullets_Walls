function hasCollided(lbullet,lwall){
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x + lwall.width;

    if(bulletRightEdge >= wallLeftEdge){
        return true;
    }

    return false;
}